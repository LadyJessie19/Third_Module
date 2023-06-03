import dotenv from "dotenv"
import express from "express"
import { connectionDatabase } from "./database"
import { userRouter } from "./routes/userRoutes"

dotenv.config()
connectionDatabase()

const app = express()

app.use(express.json())
app.use(userRouter)

app.listen(3333, () => console.log('listening port 3333'))