import express from "express";
import Poid from "./routes/PoidRoutes.js"


const router = express.Router();

router.use('/poids', Poid)

export default router