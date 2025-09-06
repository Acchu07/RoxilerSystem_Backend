import {Request, Response} from 'express';

export const createUser = async (req: Request, res: Response) => {
    return res.status(201).json({message: "User created successfully"});
};

export const getAllUsers = async (req: Request, res: Response) => {
    return res.status(200).json({message: "Users retrieved successfully"});
};

export const getUserById = async (req: Request, res: Response) => {
    const {id} = req.params;
    return res.status(200).json({message: "User retrieved successfully", data: {id}});
};

export const updateUser = async (req: Request, res: Response) => {
    const {id} = req.params;
    return res.status(200).json({message: "User updated successfully", data: {id}});
};

export const deleteUser = async (req: Request, res: Response) => {
    const {id} = req.params;
    return res.status(200).json({message: "User deleted successfully", data: {id}});
};