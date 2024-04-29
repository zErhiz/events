import { Router } from "express";

import auth from "../middlewares/auth";
import upsertUser from "../controllers/user/upsert";
import signIn from "../controllers/user/signIn";
const userRouter = Router();

userRouter.post("/upsert", auth, upsertUser);
userRouter.post("/signIn", auth, signIn);

export default userRouter;