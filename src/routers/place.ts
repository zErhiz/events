import { Router } from "express";

import auth from "../middlewares/auth";
import upsert from "../controllers/place/upsert";
import getAll from "../controllers/place/getAll";
import getById from "../controllers/place/getById"
import isAdmin from "../middlewares/isAdmin";
const placeRouter = Router();

placeRouter.get("/getAll", auth, getAll);
placeRouter.get("/getById/:id", auth, getById)
placeRouter.post("/upsert", auth,isAdmin, upsert);


export default placeRouter;