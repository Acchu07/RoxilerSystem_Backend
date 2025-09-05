import express from "express";
import admin from "../controller/adminRouteController";

const adminRouter = express.Router();

adminRouter.get("/", admin.getAdminRouteBase);
adminRouter.post("/stores", admin.addStore);
adminRouter.post("/users", admin.addNormalUser);
adminRouter.post("/admin-users", admin.addAdminUser);

export default adminRouter;