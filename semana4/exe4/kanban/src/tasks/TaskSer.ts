export class TaskSer{
    repository:any
    repositoryParent:any
    constructor(repository:any, repositoryParent:any){
        this.repository = repository
        this.repositoryParent = repositoryParent
    }

    async createSer(user_id:any, body:any){
        const post = await this.repository.createRep(body)
        return this.repositoryParent.associateTask(user_id, post._id)
    }
}