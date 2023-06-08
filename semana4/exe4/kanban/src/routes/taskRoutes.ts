import { Router } from "express"
import { TaskFac } from "../tasks/TaskFac"


const taskModule = TaskFac()
export const taskRouter = Router()

// taskRouter.get('/', (req, res) => taskModule.getAllCon(req, res))
taskRouter.post('/:user_id', (req, res) => taskModule.createCon(req, res))