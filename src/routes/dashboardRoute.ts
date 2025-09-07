import express from "express";
import {dashBoardController} from "../controller/dashBoardController";
import roleCheck from "../utils/roleCheck";

const dashBoardRouter = express.Router();


// Expermiental Attempt
dashBoardRouter.get("/", roleCheck('ADMIN'), dashBoardController);


export default dashBoardRouter;