import {Request, Response} from 'express';

export const createStore = (req: Request, res: Response) => {
    res.status(201).json({message: 'Store created successfully'});
};

export const getAllStores = (req: Request, res: Response) => {
    res.status(200).json({
        stores: [
            {id: 1, name: 'Store 1'},
            {id: 2, name: 'Store 2'}
        ]
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