export class TaskCon {
    service:any
    constructor(service:any){
        this.service = service;
    }

    async createCon(req:any, res:any) {
        const { params: { user_id }, body } = req
        const result = await this.service.createSer(user_id, body)
        return res.status(201).json( { message: "The task was successfully created", result })
    }
}