import { Router } from "express";
import { UserFac } from "../users/UserFac";

const userRouter = Router()
const userFac = new UserFac()
const UserCon = userFac.build().controller

userRouter.post('/', (req, res) => {
    return UserCon.createCon(req, res)
})

userRouter.get('/', (req, res) => {
    return UserCon.getAllCon(req, res)
})

/* userRouter.get('/:name', (req, res) => {
    return UserCon.findByNameCon(req, res)
}) */

userRouter.delete("/:id", (req, res) => {
    return UserCon.deleteCon(req, res)
})

userRouter.get('/:id', (req, res) => {
    return UserCon.findByIdCon(req, res)
})

export { userRouter }