import type {NextFunction, Request, Response} from "express";
import type {Role} from "../types/allTypes";

function roleCheck(...role: Array<Role>) {
    return function (req: Request, res: Response, next: NextFunction) {
        if (!role.includes(req.token.data.role)) {
            return res.status(403).json({message: "Unauthorized"});
        }
        console.log(req.token.data.role);
        console.log(role);
        next();
    };
}

export default roleCheck;
