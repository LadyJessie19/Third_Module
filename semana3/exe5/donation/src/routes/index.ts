/* This layer takes care of the routes used with express lib */

import { Request, Response, Router } from "express";
import { facItemRoute } from "../app/services/factories";

const Routes = Router()
const Domain = facItemRoute()

Routes.post('/items', (req:Request, res:Response) => {
  return Domain.createCon(req, res)
})

Routes.get('/items', (req:Request, res:Response) => {
  return Domain.findAllCon(req, res)
})

Routes.get('/items/:id', async (req: Request, res: Response) => {
  return Domain.findByIdCon(req, res)
  })

Routes.get('/items/:city', async (req: Request, res: Response) => {
  return Domain.findByCityCon(req, res)
  })

  Routes.delete('/items/:id', async (req: Request, res: Response) => {
     return Domain.deleteCon(req, res)
    })

Routes.patch('/items/:id', async (req: Request, res: Response) => {
  return Domain.setDonatedTrueCon(req, res)
  })

  export { Routes }

  //eof