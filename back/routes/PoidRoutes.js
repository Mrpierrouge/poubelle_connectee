import express from "express"
import { getAllpoids, getpoid, createpoid, deletepoid, updatepoid } from '../controllers/PoidController.js'

const router = express.Router();

router.get('/', getAllpoids)
router.get('/:id', getpoid)
router.post('/', createpoid)
router.put('/:id', updatepoid)


export default router