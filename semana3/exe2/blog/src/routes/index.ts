/* This layer takes care of the routes used with express lib */

import { Request, Response, Router } from "express";
import { facPostRoute } from "../app/services/factory";

const Routes = Router();
const Domain = facPostRoute();

Routes.get("/posts", async (req: Request, res: Response) => {
  return Domain.findAll(req, res);
});

Routes.get("/author:author", async (req: Request, res: Response) => {
  return Domain.findByAuthor(req, res);
});

Routes.post("/posts", async (req: Request, res: Response) => {
  return Domain.create(req, res);
});

Routes.delete("/posts:id", async (req: Request, res: Response) => {
  return Domain.delete(req, res);
});

Routes.patch("/posts:likes", async (req: Request, res: Response) => {
  return Domain.like(req, res)
});

Routes.get("/posts:id", async (req: Request, res: Response) => {
  return Domain.findOne(req, res)
});

Routes.put("/route:id", async (req: Request, res: Response) => {});

export default Routes;

//eof
