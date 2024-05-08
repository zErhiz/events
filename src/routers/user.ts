import { Router } from "express";

import auth from "../middlewares/auth";
import upsertUser from "../controllers/user/upsert";
import getById from "../controllers/user/getById";
import signIn from "../controllers/user/signIn";
import passport from "../middlewares/passport";
const userRouter = Router();

userRouter.get("/getById/:id", auth , getById);
userRouter.post("/upsert", auth, upsertUser);
userRouter.post("/signIn", auth, signIn);
userRouter.post('/signout', passport.authenticate('jwt', {session: false}));

export default userRouter;