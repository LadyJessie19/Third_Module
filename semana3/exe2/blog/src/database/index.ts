/* This section creates the conection between the database(mongodb) with the project */
import { MongoClient } from 'mongodb'

const url = "link"
const db = "blog"
const col = "posts"

const client = new MongoClient(url)
const database = client.db(db).collection(col)

export default database

//client.close()
// eof