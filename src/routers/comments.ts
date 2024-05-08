import { Router } from "express";

import auth from "../middlewares/auth";
import upsert from "../controllers/event/upsert";
import getById from "../controllers/comment/getById";
import deleteById from "../controllers/comment/deleteComment";
import checkEventDate from "../middlewares/checkEventDate";
const commentRouter = Router();

commentRouter.get("/getByEventId/:id", auth, getById);
commentRouter.post("/upsert", auth, checkEventDate, upsert);
commentRouter.delete("/delete/:id", auth, deleteById);

export default commentRouter;