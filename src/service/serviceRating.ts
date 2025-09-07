import {loggerInfo} from "../utils/logger";
import {dbRatingCreate, dbRatingUpdate} from "../model/dbRating";
import type {Request} from "express";

class ServiceRating {
    constructor() {
        loggerInfo('Invoked Service Rating');
    }

    async createRating(req: Request) {
        const userId = req.token.data.id;
        const {storeId, rating: value} = req.body;
        const ratingObject = {userId, storeId, value};
        console.log(ratingObject);
        const newRating = await dbRatingCreate(ratingObject);
        return newRating;
    }

    async updateRating(req: Request) {
        const {id, rating: value} = req.body;
        // Logic flaw here i need to verify if rating id and user id match
        const updatedRating = await dbRatingUpdate({id, value});
        return updatedRating;
    }
}

export default new ServiceRating();