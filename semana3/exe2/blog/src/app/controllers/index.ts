/* This is the layer that takes care of all the surface from the database */
/* Requisitions, for instance */

import { Request, Response } from "express";
import { PostSer } from "../services";

export class PostCon {
    service: PostSer
    constructor(service:PostSer){
        this.service = service
    }
    async create(req:Request, res:Response){
        const { body } = req
        const result = await this.service.create(body)
        res.status(201).json({ data: result })
    }
    async like(req:Request, res:Response){
        const { params: { id = null } } = req
        if(!id){
            return res.status(400).json({ error: true, message: 'Invalid Id. Try another one.'})
        }
        const result = await this.service.like(id)
        if('error' in result) {
            res.status(400).json({ message: result.message })
        }
        res.status(204).json({fini: 'doritos'})
    }
    async findOne(req:Request, res:Response){
        const { params: { id = null }} = req
        if(!id){
            return res.status(400).json({ message: 'This post was not found in the database.'})
        }
        const result = await this.service.findOne(id)
        if ('error' in result) {
            res.status(400).json({ message: result.message })
        }
        res.status(200).json({ data: result })
    }
    async findByAuthor(req:Request, res:Response){
        const { params: { author = null }} = req
        if(!author){
            return res.status(400).json({ message: 'This author was not found in the database.'})
        }
        const result = await this.service.findByAuthor(author)
        if ('error' in result) {
            res.status(400).json({ message: result.message })
        }
        res.status(200).json({ data: result })
    }
    async findAll(req:Request, res:Response){
        const result = await (await this.service.findAll()).toArray()
        res.status(200).json({data: result})
    }
    async delete(req:Request, res:Response){
        const { params: { id } } = req
        if(!id) {
            return res.status(400).json({ message: 'Invalid id' })
        }
        await this.service.delete(id)
        res.status(200).json()
    }
}
