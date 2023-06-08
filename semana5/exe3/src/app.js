import { CRUD } from "./CRUD/crud.js";

const repository = ['787', '434', '565', '121']

const crud = new CRUD(repository)

crud.read("Before changes") // ['787','434','565','121']

crud.create('1212')
crud.update(0, '7878')
crud.delete(1)

crud.read("After changes")// ['7878',[deleted],'565','121', '1212']
