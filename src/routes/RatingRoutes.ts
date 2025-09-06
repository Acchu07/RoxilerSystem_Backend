import express from "express";
import {createRating, deleteRating, getAllRatings, getRatingById, updateRating} from '../controller/ratingController';

const ratingRouter = express.Router();

// Needs validators and Role based access control
ratingRouter.post("/", createRating);
ratingRouter.get("/", getAllRatings);
ratingRouter.get("/:id", getRatingById);
ratingRouter.put("/:id", updateRating);
ratingRouter.delete("/:id", deleteRating);

export default ratingRouter;
