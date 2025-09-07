import {Request, Response} from 'express';
import serviceStore from "../service/serviceStore";

export const createStore = async (req: Request, res: Response) => {
    const newStore = await serviceStore.createStore(req.body);
    res.status(201).json({message: 'Store created successfully', data: newStore});
};

export const getAllStores = async (req: Request, res: Response) => {
    const allStores = await serviceStore.getAllStores();
    res.status(200).json({
        message: 'Stores retrieved successfully',
        data: allStores,
    });
};

export const getStoreById = (req: Request, res: Response) => {
    const {id} = req.params;
    res.status(200).json({
        store: {id: id, name: `Store ${id}`}
    });
};

export const updateStore = (req: Request, res: Response) => {
    const {id} = req.params;
    res.status(200).json({
        message: 'Store updated successfully',
        store: {id: id, ...req.body}
    });
};

export const deleteStore = (req: Request, res: Response) => {
    const {id} = req.params;
    res.status(200).json({
        message: 'Store deleted successfully',
        id: id
    });
};