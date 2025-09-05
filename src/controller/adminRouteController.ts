import type {Request, Response} from "express";
import {loggerInfo} from "../utils/logger";

function getAdminRouteBase(req: Request, res: Response) {
    loggerInfo('Admin Path');
    console.log('Cookies: ', req.signedCookies);
    res.status(200).json({message: "admin base path"});
}

function addStore(req: Request, res: Response) {
    loggerInfo('Adding new store');
    loggerInfo(req.body);
    res.status(201).json({message: "store created successfully"});
}

function addNormalUser(req: Request, res: Response) {
    loggerInfo('Adding new normal user');
    res.status(201).json({message: "normal user created successfully"});
}

function addAdminUser(req: Request, res: Response) {
    loggerInfo('Adding new admin user');
    res.status(201).json({message: "admin user created successfully"});
}

export default {
    getAdminRouteBase,
    addStore,
    addNormalUser,
    addAdminUser
};

