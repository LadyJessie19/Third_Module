/* This layer takes care of the routes used with express lib */

import { Request, Response, Router } from "express";
import { facProfileRoute } from "../app/services/factories";

const Routes = Router()
const Domain = facProfileRoute()

const path = '/profiles'
const pathId = '/profiles/:id'

Routes.post(path, (req:Request, res:Response) => {
  return Domain.createCon(req, res)
})

Routes.get(path, (req:Request, res:Response) => {
  return Domain.findAllCon(req, res)
})

Routes.get(pathId, (req:Request, res:Response) => {

})

Routes.post(path, async (req: Request, res: Response) => {
   
  })

Routes.put(pathId, async (req: Request, res: Response) => {
   
  })
Routes.patch(pathId, async (req: Request, res: Response) => {
   
  })

Routes.delete(pathId, async (req: Request, res: Response) => {
   return Domain.deleteCon(req, res)
  })

  export { Routes }

  //eof