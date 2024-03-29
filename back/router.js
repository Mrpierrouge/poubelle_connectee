import express from "express";
import Poid from "./routes/PoidRoutes.js"
import Ecole from "./routes/EcoleRoutes.js"
import Date from "./routes/DateRoutes.js"


const router = express.Router();

router.use('/poids', Poid)
router.use('/ecoles', Ecole)
router.use('/date', Date)

export default router