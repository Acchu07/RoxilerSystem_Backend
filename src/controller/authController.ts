import type {Request, Response} from "express";
import jwt from "jsonwebtoken";
import config from "../utils/config";

function attemptLogin(req: Request, res: Response) {
    const {name, password} = req.body;
    if (name === 'admin' && password === 'password') {

        const payloadToSign = {
            name: name,
            email: "retrievefromDB",// Index email do i need ID since email is unique??
            role: "ADMIN", // RetrieveFromDB
        };
        const jsonToken = jwt.sign({
            exp: config.EXPIRATION_TIME,
            data: payloadToSign
        }, config.JWT_SECRET);

        res.status(200)
            .cookie('token', jsonToken, {
                httpOnly: true,
                maxAge: config.EXPIRATION_TIME,
                signed: true,
            }).json({message: {payload: payloadToSign, token: jsonToken}});
        return;
    }
    res.status(200).json({message: "Incorrect credentials"});
}

function attemptLogout(req: Request, res: Response) {
    res.status(200).json({message: "logout"});
}

function attemptRegister(req: Request, res: Response) {
    res.status(200).json({message: "register"});
}

export {attemptLogin, attemptLogout, attemptRegister};