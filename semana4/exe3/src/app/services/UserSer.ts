export class UserSer {
    repository:any
    constructor(repository:any){
        this.repository = repository
    }
    async createSer(body:any){
        const userAlreadyExists = await this.repository.findByEmailRep(body.email)

        if(userAlreadyExists){
            return {
                error: true,
                message: "User already exists"
            }
        }

        return this.repository.createRep(body)
    }
    
    async findAllRep(){
        return this.repository.findAllRep()
    }
}