/* This section controls the database methods */
/* This section get in touch in the database */

export class ProfileRep{
    database: any
    constructor(database: any){
        this.database = database
    }
    async createRep(some:any){
        return this.database.insertOne(some)
    }
    async findAllRep(){
        return this.database.find()
    }
}