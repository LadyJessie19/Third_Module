/* This section creates the conection between the database(mongodb) with the project */
import { MongoClient } from 'mongodb'

const url = "mongodb+srv://jessie:jessie@first.buahyq8.mongodb.net/linkedin"
const db = "linkedin"
const col = "profiles"

const client = new MongoClient(url)
const database = client.db(db).collection(col)

export default database

// client.close()
// eof