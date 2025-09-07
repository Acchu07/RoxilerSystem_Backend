import {Request, Response} from 'express';
import serviceRating from "../service/serviceRating";

export const createRating = async (req: Request, res: Response) => {
    const newRating = await serviceRating.createRating(req);
    res.status(200).json({
        message: 'Rating created successfully',
        rating: newRating,
    });
};

export const updateRating = async (req: Request, res: Response) => {
    const updatedRating = await serviceRating.updateRating(req);
    res.status(200).json({
        message: 'Rating updated successfully',
        data: updatedRating,
    });
};

export const getAllRatings = async (req: Request, res: Response) => {
    res.status(200).json({message: 'Rating Updated successfully', data: 1});
};

export const getRatingById = (req: Request, res: Response) => {
    const {id} = req.params;
    res.status(200).json({
        rating: {id: id, rating: 5}
    });
};

export const deleteRating = (req: Request, res: Response) => {
    const {id} = req.params;
    res.status(200).json({
        message: 'Rating deleted successfully',
        id: id
    });
};