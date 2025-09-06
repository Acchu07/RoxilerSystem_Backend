import {Request, Response} from 'express';

export const createRating = (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Rating created successfully'
    });
};

export const getAllRatings = (req: Request, res: Response) => {
    res.status(200).json({
        ratings: [
            {id: 1, rating: 5},
            {id: 2, rating: 4}
        ]
    });
};

export const getRatingById = (req: Request, res: Response) => {
    const {id} = req.params;
    res.status(200).json({
        rating: {id: id, rating: 5}
    });
};

export const updateRating = (req: Request, res: Response) => {
    const {id} = req.params;
    res.status(200).json({
        message: 'Rating updated successfully',
        rating: {id: id, ...req.body}
    });
};

export const deleteRating = (req: Request, res: Response) => {
    const {id} = req.params;
    res.status(200).json({
        message: 'Rating deleted successfully',
        id: id
    });
};