export class UserRep {
    model:any
    constructor(model:any){
        this.model = model
    }

    async createRep(user:any){
        return await this.model.create(user)
    }

    async findByEmailRep(email:any){
        return this.model.findOne({ email })
    }
}