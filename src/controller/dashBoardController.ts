import type {Request, Response} from "express";
import createDashboard from "../service/serviceDashboard";

export async function dashBoardController(req: Request, res: Response) {
    const role = req.token.data.role;
    const runBasedOfRole = createDashboard(role);
    const dashboardData = await runBasedOfRole.getDashboard();

    res.status(200).json({
        message: `${role} based dashboard`,
        role: role,
        data: dashboardData,
    });
}