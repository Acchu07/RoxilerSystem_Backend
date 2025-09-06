import {Request, Response} from 'express';
import serviceUser from "../service/serviceUser";

export const createUser = async (req: Request, res: Response) => {
    const userCreated = await serviceUser.createUser(req.body);
    return res.status(201).json({message: "User created successfully", data: userCreated});
};

export const getAllUsers = async (req: Request, res: Response) => {
    const allUsers = await serviceUser.getAllUser();
    return res.status(200).json({message: "Users retrieved successfully", data: allUsers});
};

export const updateUser = async (req: Request, res: Response) => {
    console.log(req.token);
    console.log(req.body);
    const updatedUser = await serviceUser.updateUser(req);
    return res.status(200).json({message: "User updated successfully", data: updatedUser});
};

// Dummy Not Required
export const getUserById = async (req: Request, res: Response) => {
    const {id} = req.params;
    return res.status(200).json({message: "User retrieved successfully", data: {id}});
};

export const deleteUser = async (req: Request, res: Response) => {
    const {id} = req.params;
    return res.status(200).json({message: "User deleted successfully", data: {id}});
};