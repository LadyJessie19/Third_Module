import { Router } from 'express'
import { userFac } from '../'

const userDomain = userFac.controller
const userRouter = Router()

userRouter.post('/users', (req, res) => {
    return userDomain.createCon(req, res)
})

userRouter.get('/users', (req, res) => {
    return userDomain.findAllCon(req, res)
})

export { userRouter}
