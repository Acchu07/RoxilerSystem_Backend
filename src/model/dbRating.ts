import Database from "./prismaDBSingleInstance";
import {RegisterRating} from "../types/allTypes";

const prisma = Database.getInstance();

export const dbRatingCreate = async (ratingObject: RegisterRating) => {
    const rating = await prisma.rating.create({
        data: {
            userId: ratingObject.userId,
            storeId: ratingObject.storeId,
            value: ratingObject.value,
        },
    });
    return rating;
};

export const dbRatingUpdate = async (ratingObject: { id: number, value: number }) => {
    console.log(ratingObject);
    const updateRating = await prisma.rating.update({
        where: {
            id: ratingObject.id,
        },
        data: {
            value: ratingObject.value,
        },
    });
    return updateRating;
};
