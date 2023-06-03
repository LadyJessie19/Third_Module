import { Router } from "express";
import { UserFac } from "../users/UserFac";

const userRouter = Router()
const userFac = UserFac.build().controller

userRouter.post('/users', (req, res) => {
    return userFac.createCon(req, res)
})

export { userRouter }