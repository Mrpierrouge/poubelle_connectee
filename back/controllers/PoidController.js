import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getAllpoids = (req, res) => {
    prisma.cantines.findMany()
    .then((poids) =>{
        res.json(poids)
    })
    .catch((error) => {
        res.json(error)
    })
}
const getpoid = (req, res) => {
    now = Date.now()
    date = (now.getDate(), now.getMonth(), now.getYear())

    prisma.cantines.findUnique({
        where: {
            date: date
        }
    })
    .then((poids) =>{
        res.json(poids)
    })
    .catch((error) => {
        res.json(error)
    })
}
const createpoid = (req, res) => {

}
const updatepoid = (req, res) => {

}
const deletepoid = (req,res) =>{
    
}

export { getAllpoids, getpoid, createpoid, updatepoid, deletepoid}