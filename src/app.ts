import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import path from "path";
import './utils/database'
import { setSecurityHeaders } from "./middlewares/setSecurityHeaders";
import handlerResponse from "./middlewares/handlerResponse";
import handlerRequest from "./middlewares/handlerRequest";
import handlerError from "./middlewares/handlerError";
import * as routes from "./routers";

import { allowedOrigins } from "./utils/allowedOrigins";
import createLogger from "./utils/logger";



const corsOptions = {
   preflightContinue: false,
   methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
   origin: (
       origin: string | undefined,
       callback: (err: Error | null, allow?: boolean) => void
   ) => {
       if (process.env.ENV !== "dev") {
           if (!origin || allowedOrigins.indexOf(origin) !== -1) {
               callback(null, true);
           } else {
               createLogger.error({
                   controller: "CORS",
                   error: "Not allowed by CORS, origin: " + origin,
               });
               callback(null, false);
           }
       } else {
           callback(null, true);
       }
   },
   credentials: true,
};



 const routeMappings = [
   { path: "/user", router: routes.userRouter },
   { path: "/place", router: routes.placeRouter},
   { path: "/event", router: routes.eventRouter},
   { path: "/comment", router: routes.commentRouter},
    { path: "/qualification", router: routes.qualificationRouter}
 
];

function initializeRoutes(server: Express) {
   routeMappings.forEach((route) => {
       server.use(route.path, route.router);
   });

   server.use((err: any, req: Request, res: Response, next: NextFunction) => {
       if (err instanceof SyntaxError && err.message.includes("JSON")) {
           return res.status(400).json({ error: "Json Request Format is invalid" });
       }

       return res.status(500).json({ error: "Internal server error" });
   });

}

const server = express();

server.use(setSecurityHeaders);
server.use(express.json());
server.use(cors(corsOptions));
server.use(express.urlencoded({ extended: false }));
server.use(handlerRequest);

 initializeRoutes(server); 

server.use(handlerError);
server.use(handlerResponse);

export default server;