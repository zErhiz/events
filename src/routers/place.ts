import { Router } from "express";

import auth from "../middlewares/auth";
import upsert from "../controllers/place/upsert";
import getAll from "../controllers/place/getAll";
import isAdmin from "../middlewares/isAdmin";
const placeRouter = Router();

placeRouter.get("/getAll", auth, getAll);
placeRouter.post("/upsert", auth,isAdmin, upsert);

export default placeRouter;