import express from "express";
import {dashBoardController} from "../controller/dashBoardController";

const dashBoardRouter = express.Router();


// Expermiental Attempt
dashBoardRouter.get("/", dashBoardController);


export default dashBoardRouter;