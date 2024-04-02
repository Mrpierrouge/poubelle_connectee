import express from "express"
import { getAllpoidsOfecole, getAllecole, getDatedPoidsOfecole} from '../controllers/EcoleController.js'

const router = express.Router();

router.get('/:ecole', getAllpoidsOfecole)
router.get('/', getAllecole)
router.post('/date/:ecole:date', getDatedPoidsOfecole)

export default router