import {jwtPayload} from "../allTypes";

declare module "express-serve-static-core" {
    interface Request {
        token: jwtPayload;
    }
}