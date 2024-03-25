import express from "express"
import { getAllpoidsOfecole, getAllecole} from '../controllers/EcoleController.js'

const router = express.Router();

router.get('/:ecole', getAllpoidsOfecole)
router.get('/', getAllecole)

export default router