import { Router } from "express";

import { userRouter } from "./userRoutes";
import { taskRouter } from "./taskRoutes";

const RoutesUserTasks = Router()

RoutesUserTasks.use("/users", userRouter)
RoutesUserTasks.use("/tasks", taskRouter)

export { RoutesUserTasks }