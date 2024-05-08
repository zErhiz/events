import { Router } from "express";

import auth from "../middlewares/auth";
import upsert from "../controllers/qualification/upsert";
import getByIds from "../controllers/qualification/getByEventIdAndUserId";
import checkEventDate from "../middlewares/checkEventDate";

const qualificationRouter = Router();

qualificationRouter.get("/getByUserIdAndEventId", auth, getByIds);
qualificationRouter.post("/upsert", auth, checkEventDate, upsert);

export default qualificationRouter;