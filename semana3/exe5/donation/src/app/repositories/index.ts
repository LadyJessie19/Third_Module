/* This section controls the database methods */
/* This section get in touch in the database */
import { IItem } from '../services/factories'

export class ItemRep{
    database: any
    constructor(database: any){
        this.database = database
    }
    async createRep(item:IItem){
        return this.database.insertOne(item)
    }
    async findAllRep(){
        return this.database.find()
    }
    async findByIdRep(id:any){
        return this.database.findOne(id)
    }
    async findByCityRep(city:any){
        return this.database.findOne({city})
    }
    async deleteRep(query:any){
        return this.database.deleteOne(query)
    }
    async setDonatedTrueRep(id:any, filter:any){
        return this.database.updateOne(id, filter)
    }
}