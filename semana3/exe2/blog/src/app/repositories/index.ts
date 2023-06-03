/* This section controls the database methods */
/* This section get in touch in the database */

import { ObjectId } from "mongodb";
import database from "../../database";

export class PostRep {
    async create(post:object){
        const result = await database.insertOne(post)
        return result
    }
    async findById(id:string){
        return database.findOne({_id: new ObjectId(id)})
    }
    async findAll(){
        return database.find()
    }
    async findByAuthor(author:string){
        return database.find({author})
    }
    async like(id:string){
        return database.updateOne({
            _id: new ObjectId(id),
          }, {
            // $set: { likes: likes + 1}
          })
    }
    async delete(id:string){
        return database.deleteOne({_id: new ObjectId(id)})
    }
}