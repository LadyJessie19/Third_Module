import { TaskCon } from "./TaskCon";
import { TaskRep } from "./TaskRep";
import { TaskSer } from "./TaskSer";
import { Task } from "./Task";
import { UserFac } from "../users/UserFac"

const UserRep = new UserFac().build().repository

export const TaskFac = () => {
    const repository = new TaskRep(Task)
    const service = new TaskSer(repository, UserRep)
    const controller = new TaskCon(service)
    return controller
}
