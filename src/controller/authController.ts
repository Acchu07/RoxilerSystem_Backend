import type {Request, Response} from "express";
import serviceUser from "../service/serviceUser";
import config from "../utils/config";

async function attemptLogin(req: Request, res: Response) {
    const isLoginSuccess = await serviceUser.LoginUser(req.body);
    if (isLoginSuccess) {
        const {role, token} = isLoginSuccess;
        return res.status(200)
            .cookie('token', token, {
                httpOnly: true,
                maxAge: config.EXPIRATION_TIME,
                signed: true,
                // add path so cookie is sent only on that path - later
            })
            .json({message: "Login Successful", role: role});
    }
    return res.status(401).json({message: "Incorrect credentials"});
}

function attemptLogout(req: Request, res: Response) {
    console.log(res.clearCookie('token', {httpOnly: true, signed: true}));
    res.status(200).json({message: "logout"});
}

async function attemptRegister(req: Request, res: Response) {
    const newUser = await serviceUser.createUser(req.body);
    // This could be done better throw error to express? try catch? dont waste time now - Come back later
    if (newUser && "id" in newUser) {
        return res.status(409).json({message: "User already exists"});
    }
    res.status(200).json({message: "Registration Successful", user: newUser});
}

export {attemptLogin, attemptLogout, attemptRegister};