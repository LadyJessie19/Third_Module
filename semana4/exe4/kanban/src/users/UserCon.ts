import { Request, Response } from "express"
import { ObjectId } from "mongoose"
import * as yup from "yup"

export class UserCon{
    service:any
    constructor(service:any){
        this.service = service
    }

    async createCon(req:any, res:any) {
        const { body } = req

        const userYup = yup.object().shape({
            name: yup.string().required("Precisa de um nome"),
            email: yup.string().email().required()
        })
        
        try {
            await userYup.validate(body)
        } catch (error) {
            return res.status(400).json({
                error:true, errorMessage: error

            })
        }

        const result = await this.service.createSer(body)
        const { message, statusCode, data } = result as any;
        
        if('error' in result) {
            return res.status(400).json({ message, data })
        }

        return res.status(201).json({ messageDB: "The user was successfully created", userId: result._id, result })
    }

    async getAllCon(req:Request, res:Response){
        const result = await this.service.getAllSer()
        return res.status(200).json({ messageDB: "The repository has this users!", result })
    }

    async findByNameCon(req:Request, res:Response){
        const { params: { name } } = req
        const result = await this.service.findByNameSer(name)
        
        /* if('error' in result) {
            return res.status(400).json(result)
        } */

        return res.status(200).json({ messageDB: "This user was found", result })
    }

    async deleteCon(req:Request, res:Response){
        const { params: { id } } = req
        const result = await this.service.deleteSer(id)

        if('error' in result) {
            return res.status(400).json(result)
        }
        
        return res.status(200).json({ messageDB: "The user was successfully deleted", userDeleted: result.email })
        }

    async findByIdCon(req:Request, res:Response){
        const { params: { id } } = req
        
        const result = await this.service.findByIdSer(id)
        
        if(!result) {
            return res.status(400).json({ statusCon: 'not ok', result})
        }
        
        return res.status(200).json({ messageDB: "The user was successfully found", statusCon: 'ok', result })
        }
    }