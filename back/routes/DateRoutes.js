import express from "express"
import { getAllpoidsOfdate } from '../controllers/DateController.js'

const router = express.Router();

router.get('/:date', getAllpoidsOfdate)

export default router