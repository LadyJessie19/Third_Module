import { Request, Response } from 'express';

export class UserCon{
    service:any
    constructor(service:any){
        this.service = service
    }

    async createCon(req:Request, res:Response){
        const { body } = req

        const result = await this.service.createSer(body)
        
        if('error' in result) {
            return res.status(400).json({error: true, message: result.message})
        }

        return res.status(201).json({ result })
    }
}