import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllecole = (req, res) => {
  prisma.cantines
    .findMany()
    .then((pesees) => {
      let ecoles = [];
      pesees.forEach((pesee) => {
        if (!ecoles.includes(pesee.ecole)) {
          ecoles.push(pesee.ecole);
        }
      });
      res.json(ecoles);
    })
    .catch((error) => {
      res.json(error);
    });
};
const getAllpoidsOfecole = (req, res) => {
  let ecole = req.params.ecole;
  prisma.cantines
    .findMany({
      where: {
        ecole: ecole,
      },
    })
    .then((poids) => {
      res.json(poids);
    })
    .catch((error) => {
      res.json(error);
    });
};

export { getAllecole, getAllpoidsOfecole };
