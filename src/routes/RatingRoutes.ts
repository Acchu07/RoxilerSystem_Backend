import express from "express";
import {createRating, deleteRating, getAllRatings, getRatingById, updateRating} from '../controller/ratingController';
import tokenVerification from "../utils/tokenVerification";

const ratingRouter = express.Router();

// Needs validators and Role based access control
ratingRouter.post("/", tokenVerification, createRating);
ratingRouter.get("/", tokenVerification, getAllRatings);
ratingRouter.get("/:id", tokenVerification, getRatingById);
ratingRouter.put("/:id", tokenVerification, updateRating);
ratingRouter.delete("/:id", tokenVerification, deleteRating);

export default ratingRouter;
