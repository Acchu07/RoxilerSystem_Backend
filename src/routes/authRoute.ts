import express from "express";
import {attemptLogin, attemptLogout, attemptRegister} from '../controller/authController.js';
import {validateRegisterationUser} from "../utils/expressValidatorSchemas";


const authRouter = express.Router();

// Login and Register Needs validation middleware
authRouter.post("/login", attemptLogin);
authRouter.post("/register", validateRegisterationUser,attemptRegister);
authRouter.post("/logout", attemptLogout);

export default authRouter;