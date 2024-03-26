import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllpoidsOfdate = (req, res) => {
    let date = req.body.date;
    prisma.cantines
        .findMany({
        where: {
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

export { getAllpoidsOfdate };