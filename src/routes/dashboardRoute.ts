import express from "express";
import {dashBoardController} from "../controller/dashBoardController";
import tokenVerification from "../utils/tokenVerification";

const dashBoardRouter = express.Router();


// Expermiental Attempt
dashBoardRouter.get("/", tokenVerification, dashBoardController);


export default dashBoardRouter;