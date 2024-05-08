import { Router } from "express";

import auth from "../middlewares/auth";
import upsert from "../controllers/event/upsert";
import getAll from "../controllers/event/getAll";
import getById from "../controllers/event/getById";
import register from "../controllers/event/register";
import isOrganizer from "../middlewares/isOrganizer";
const eventRouter = Router();

eventRouter.get("/getAll", auth, getAll);
eventRouter.get("/getById/:id", auth, getById);
eventRouter.post("/upsert", auth, isOrganizer, upsert);
eventRouter.post("/register", auth, register);

export default eventRouter;