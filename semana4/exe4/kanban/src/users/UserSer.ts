import { ObjectId } from "mongoose"

export class UserSer {
    repository:any
    constructor(repository:any){
        this.repository = repository
    }
    
    async createSer(body:any){
        const userExists = await this.repository.findByEmailRep(body.email) 
        if(userExists){
            return {
                error: true,
                message: "User is not new",
                status: 400
            }
        }
        return this.repository.createRep(body)
    }

    async getAllSer(){
        const result = await this.repository.getAllRep()
        return result
    }

    async findByNameSer(name:string){
        const result = await this.repository.findByNameRep(name)
        return result
    }

    async deleteSer(id:ObjectId){
        const result = await this.repository.deleteRep(id)
        return result
    }

    async findByIdSer(id:string){
        const result = await this.repository.findByIdRep(id)
        if(result){
            return { statusSer: 'ok', result }
        }

        // return { statusSer: 'not ok'}
    }
}