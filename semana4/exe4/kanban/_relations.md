# The Relationship Between Entities

## Obsevation points:

For studies purposes, i'm going to use the words "Parent", "Son", "Brother", and etc, just to demostrate the relation between entities.

An short example to entities relation:

![img.png](https://media.discordapp.net/attachments/1080178640756691157/1115291516152315984/210573868-908937bc-e555-46b8-8d9c-8bb481d6fdeb.png?width=454&height=369)


## In relation One to One:

I'm currentlly studying a kanban database, so all the examples that are going to se used are from it.

### Routes - for both entities

* index.ts -> 

````
import { Router } from "express";
import { userRouter } from "./userRoutes";
import { taskRouter } from "./taskRoutes";

const RoutesUserTask = Router()

RoutesUserTask.use("/users", userRouter)
RoutesUserTask.use("/tasks", tasksRouter)

export { RoutesUserTask }
````

* userRoutes ->
```
import { Router } from "express";
import { UserFac } from "../users/UserFac";

const userRouter = Router()
const userFac = UserFac.build().controller

userRouter.post('/', (req, res) => {
    return userFac.createCon(req, res)
})

... other routes here ...

export { userRouter }

```

* taskRoutes -> 

```



```

### Entity Parent - (User)

* Layer "Entity": indicate on the schema type ObjectId and ref from the entity Son (Task);

* Layer Factory: the Module factory must export the controller and the repository;

* Layer Routes: All the requisitions path from the entity Parent;

* Layer Controller: The "data waitress";

* Layer Service: The "data cooker";

* Layer Repository: The "data table";
    - In this repository must have a associateSon function.

### Entity Son - (Task)

* Layer "Entity": indicate on the schema type ObjectId and ref from the entity Parent (User);

* Layer Factory: the Module factory must export the controller;
    - The sonFac must import the parentFac repository, because its initialized with the correct parameters (service, model, controller). In this way, we will be able to also manipulate the parent repository when a child of the son will be created.
    - the son factory doesn't needs to return repository with the controller.

* Layer Routes: All the requisitions path from the entity Parent;

* Layer Controller: The "data waitress";
    - at the class constructor we pass two proprieties: the service and de parentService.
    - The createCon function needs the parent id (user_id).
    - In the createSer we must use the associateSon function, using the parameters parentId and sonId. This function is at parentRep.

* Layer Service: The "data cooker";

* Layer Repository: The "data table";

* Function Associate Son-Parent: this function is responsable for make a push in the parent repository with the created Son;