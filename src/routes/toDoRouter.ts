import exp from 'express'
import { create, getAll, GetAllByUserId, GetById, updateById } from '../controllers/toDoController'

const router = exp.Router()

router.post('/create', create)

router.get('/', getAll)

router.get('/:id', GetById)

router.get('/user/:id', GetAllByUserId)

router.patch('/id', updateById)


export default router