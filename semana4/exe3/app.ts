import dotenv from 'dotenv'
dotenv.config()

import express from "express"

import { connectionDatabase } from './src/database/config'

import { userRouter } from "./Routes/userRouter"
import { postRouter } from "./Routes/postRouter"

connectionDatabase()
const app = express()

app.use(express.json())
app.use(userRouter)
app.use(postRouter)

app.listen(3333, () => console.log('listening port 3333'))