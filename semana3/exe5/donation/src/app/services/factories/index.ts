import { ItemSer } from "..";
import { ItemCon } from "../../controllers";
import { ItemRep } from "../../repositories";
import database from "../../../database";

export interface IItem {
  title: string;
  description: string;
  city: string;
  location: string;
  phoneNumber: string;
  isDonated: boolean;
  createdAt: Date;
}

class Item {
  title: string;
  description: string;
  city: string;
  location: string;
  phoneNumber: string;
  isDonated: boolean;
  createdAt: Date;
  constructor(
    title: string,
    description: string,
    city: string,
    location: string,
    phoneNumber: string
  ) {
    this.title = title;
    this.description = description;
    this.city = city;
    this.location = location;
    this.phoneNumber = phoneNumber;
    this.isDonated = false;
    this.createdAt = new Date();
  }
}

export function facItem(
  body:any
): IItem {
    const {title, description, city, location, phoneNumber} = body
  return new Item(title, description, city, location, phoneNumber);
}

export function facItemRoute() {
  const repository = new ItemRep(database);
  const service = new ItemSer(repository);
  const controller = new ItemCon(service);
  return controller;
}
