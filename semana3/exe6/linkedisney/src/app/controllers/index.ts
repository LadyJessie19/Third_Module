/* This is the layer that takes care of all the surface from the database */
/* Requisitions, for instance */

import { ProfileSer } from "../services"
import { Request, Response } from "express"

export class ProfileCon{
    service: ProfileSer
    constructor(service: ProfileSer){
        this.service = service
    }
    async createCon(req:Request, res:Response){
        const { body } = req
        const result = await this.service.createSer(body)
        res.status(201).json({ data: result })
    }
    async findAllCon(req:Request, res:Response){
        const result = await (await this.service.findAllSer()).toArray()
        res.status(200).json({data: result})
    }
    async deleteCon(req:Resquest, res:Response){
        
    }
}