/* This is the layer that takes care of all the surface from the database */
/* Requisitions, for instance */

import { ItemSer } from "../services";
import { Request, Response } from "express";

export class ItemCon {
  service: ItemSer;
  constructor(service: ItemSer) {
    this.service = service;
  }
  async createCon(req: Request, res: Response) {
    const { body } = req;
    const result = await this.service.createSer(body);
    res.status(201).json({ data: result });
  }
  async findAllCon(req: Request, res: Response) {
    const result = await (await this.service.findAllSer()).toArray();
    res.status(200).json({ data: result });
  }
  async findByIdCon(req: Request, res: Response) {
    const { id } = req.params;
    const result = await this.service.findByIdSer(id);
    res.status(200).json({ message: result });
  }
  async findByCityCon(req: Request, res: Response) {
    const { city } = req.params;
    const result = await (await this.service.findByCitySer(city)).toArray();
    res.status(200).json({ message: result });
  }
  async deleteCon(req: Request, res: Response){
    const { id } = req.params;
    const result = await this.service.deleteSer(id);
    res.status(200).json({ message: result });
  }
  async setDonatedTrueCon(req: Request, res: Response){
    const { id } = req.params;
    const result = await this.service.setDonatedTrueSer(id);
    res.status(200).json({ message: result });
  }
}
