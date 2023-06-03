/* This layer takes care from the data logic. All the gathering, formating, turning the data into an object. */

import { ObjectId } from "mongodb";
import { ItemRep } from "../repositories";
import { facItem } from "./factories";

export class ItemSer {
  repository: ItemRep;
  constructor(repository: ItemRep) {
    this.repository = repository;
  }
  async createSer(body: any) {
    const newPost = facItem(body);
    return await this.repository.createRep(newPost);
  }
  async findAllSer() {
    return await this.repository.findAllRep();
  }
  async findByIdSer(id:any){
    const query = { _id: new ObjectId(id) };
    return await this.repository.findByIdRep(query)
  }
  async findByCitySer(city:any){
    const query = { city };
    return await this.repository.findByCityRep(query)
  }
  async deleteSer(id:any){
    const query = { _id: new ObjectId(id) };
    return await this.repository.deleteRep(query)
  }
  async setDonatedTrueSer(id:any){
    const query = { _id: new ObjectId(id) };
    const filter = { $set: { isDonated: true, updatedAt: new Date() } }
    return await this.repository.setDonatedTrueRep(query, filter)
  }
}
