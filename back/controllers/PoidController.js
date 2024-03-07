import { PrismaClient } from "@prisma/client";
import dateFormat from "dateformat";
const prisma = new PrismaClient();

const getAllpoids = (req, res) => {
  prisma.cantines
    .findMany()
    .then((poids) => {
      res.json(poids);
    })
    .catch((error) => {
      res.json(error);
    });
};
const getpoid = (req, res) => {
  prisma.cantines
    .findUnique({
      where: {
        id: id,
      },
    })
    .then((poids) => {
      res.json(poids);
    })
    .catch((error) => {
      res.json(error);
    });
};

const updatepoid = (req, res) => {
  let id = Number(req.params.id);
  let poids = req.body;

  prisma.cantines
    .update({
      where: { id: id },
      data: {
        poids: poids.poids,
      },
    })
    .then((poids) => {
      res.json(poids);
    })
    .catch((error) => {
      res.json(error);
    });
};

const deletepoid = (req, res) => {
  let id = Number(req.params.id);
  prisma.cantines
    .delete({
      where: { id: id },
    })
    .then((poids) => {
      res.json(poids);
    })
    .catch((error) => {
      res.json(error);
    });
};

const createpoid = (req, res) => {
  let pesee = req.body;
  let date = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() +1
  );
  let formatedDate = dateFormat(date, "dd/mm/yyyy");
  // date = date.toLocaleDateString("fr")
  console.log(date);

  const Var = prisma.cantines
    .findFirst({
      where: {
        date: date,
        type: pesee.type,
        ecole: pesee.ecole,
      },
    })
    .then((data) => {
      if (data != null) {
        if (parseInt(data.poids) < parseInt(pesee.poids)) {
          prisma.cantines.update({
            where: {
              id: data.id,
            },
            data: {
              poids: parseInt(pesee.poids),
            },
          }).then((data)=> {
            res.json(data)
          }).catch((error)=>{
            res.json(error)
          })
          
        } else {
          res.json("poids inférieur au précédent");
        }
      } else {
        prisma.cantines
          .create({
            data: {
              ecole: pesee.ecole,
              type: pesee.type,
              poids: parseInt(pesee.poids),
              date: date,
            },
          })
          .then((pesee) => {
            res.json(pesee);
          })
          .catch((error) => {
            res.json(error);
          });
      }
    });
};

export { getAllpoids, getpoid, createpoid, updatepoid, deletepoid };
