import dotenv from "dotenv"
import express from "express"
import { connectionDatabase } from "./database"
import { RoutesUserTasks } from "./routes"

dotenv.config()

;(async () => {
    await connectionDatabase();
  })();
  


const app = express()

app.use(express.json())
app.use(RoutesUserTasks)

app.listen(3333, () => console.log('listening port 3333'))