import type {NextFunction, Request, Response} from "express";
import type {Role} from "../types/allTypes";

function roleCheck(...role: Array<Role>) {
    return function (req: Request, res: Response, next: NextFunction) {
        console.log(typeof req.token.data.role);
        console.log(role[0] === req.token.data.role);
        console.log(typeof role, role);
        next();
    };
}

export default roleCheck;
