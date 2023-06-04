/* This section creates the conection between the database(mongodb) with the project */
import { MongoClient } from 'mongodb'

const url = "link"
const db = "Donation"
const col = "Items"

const client = new MongoClient(url)
const database = client.db(db).collection(col)

export default database

// client.close()
// eof