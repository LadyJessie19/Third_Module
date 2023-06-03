import { MongoClient } from "mongodb";

const mongoURL = "link_here";

const databaseName = "finance";
const collectionName = "transactions";

const client = new MongoClient(mongoURL)

export const database = 
