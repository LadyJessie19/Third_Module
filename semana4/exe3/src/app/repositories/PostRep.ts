export class PostRep {
    model:any
    constructor(model:any) {
        this.model = model
    }

    async createRep(post:any){
        return this.model.create(post)
    }
}