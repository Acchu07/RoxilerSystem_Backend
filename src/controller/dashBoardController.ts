import type {Request, Response} from "express";
import createDashboard from "../service/serviceDashboard";

export function dashBoardController(req: Request, res: Response) {
    const role = req.token.data.role;
    const runBasedOfRole = createDashboard(role);
    const dashboard = runBasedOfRole.getDashboard();

    res.status(200).json({message: "dashboard", dashboard: dashboard});
}