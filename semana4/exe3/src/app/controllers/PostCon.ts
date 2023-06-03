import { Request, Response } from 'express';

export class PostCon{
    service:any
    constructor(service:any){
        this.service = service;
    }

    async createCon(req:Request, res:Response){
        const { params: { user_id }, body} = req
        const result = await this.service.createSer(user_id, body)

        return res.status(201).json({ result })
    }
}