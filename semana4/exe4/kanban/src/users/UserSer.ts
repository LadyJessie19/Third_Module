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
}