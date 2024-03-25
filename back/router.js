import express from "express";
import Poid from "./routes/PoidRoutes.js"
import Ecole from "./routes/EcoleRoutes.js"


const router = express.Router();

router.use('/poids', Poid)
router.use('/ecoles', Ecole)

export default router