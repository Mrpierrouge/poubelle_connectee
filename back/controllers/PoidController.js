import { PrismaClient } from "@prisma/client";
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
    let id = Number(req.params.id)
    let poids = req.body

    prisma.cantines.update({
        where: {id: id},
        data: {
            poids: poids.poids
        }
    })
    .then((poids) =>{
        res.json(poids)
    })
    .catch((error) => {
        res.json(error)
    })
}

const deletepoid = (req,res) =>{
    let id = Number(req.params.id)
    prisma.cantines.delete({
        where: {id: id}
    })
    .then((poids) =>{
        res.json(poids)
    })
    .catch((error) => {
        res.json(error)
    })
}

const createpoid = (req, res) => {
  let pesee = req.body;
  now = Date.now();
  date = (now.getDate(), now.getMonth(), now.getYear());

  if (
    prisma.$exists.cantines({
      date: date,
      type: pesee.type,
    })
  ) {
    prisma.cantines
      .findUnique({
        where: {
          date: date,
          type: pesee.type,
        },
      })
      .then((data) => {
        if (data.poids < pesee.poids) {
          updatepoid({
            id: data.id,
            ecole: data.ecole,
            type: data.type,
            poids: pesee.poids,
            date: date,
          });
        } else {
          res.json("poids inférieur au précédent");
        }
      })
      .catch((error) => {
        res.json(error);
      });
  } else {
    prisma.cantines
      .create({
        data: {
          ecole: pesee.ecole,
          type: pesee.type,
          poids: pesee.poids,
          date: date,
        },
      })
      .then((poids) => {
        res.json(poids);
      })
      .catch((error) => {
        res.json(error);
      });
  }
};

export { getAllpoids, getpoid, createpoid, updatepoid, deletepoid };
