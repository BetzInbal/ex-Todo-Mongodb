import exp from 'express'
import { getAll, GetById, register } from '../controllers/userController'

const router = exp.Router()

router.post('/register', register)

router.get('/', getAll)

router.get('/:id', GetById)
export default router