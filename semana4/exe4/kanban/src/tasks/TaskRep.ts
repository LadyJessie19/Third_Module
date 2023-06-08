export class TaskRep {
    model:any
    constructor(model:any){
        this.model = model;
    }

    async createRep(task:any){
        return this.model.create(task)
    }
}