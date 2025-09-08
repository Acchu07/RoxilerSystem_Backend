import type {NextFunction, Request, Response} from "express";
import type {jwtPayload} from "../types/allTypes";
import jwt from "jsonwebtoken";
import config from "./config";

function tokenVerification(req: Request, res: Response, next: NextFunction) {
    const token: string = req.signedCookies.token;
    console.log(token);
    if (!token) {
        return res.status(401).json({message: "Unauthorized"});
    }
    jwt.verify(token, config.JWT_SECRET, function (err, decoded) {
        if (err) {
            return res.status(401).json({message: "Something Wrong with Token"});
        }
        if (isJwtPayload(decoded)) {
            req.token = decoded;
            next();
        }

    });
}

function isJwtPayload(token: unknown): token is jwtPayload {
    // Logic to check if obj has exp, data:{id,email,role},iat do later
    return true;
}

export default tokenVerification;