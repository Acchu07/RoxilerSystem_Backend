import express from "express";
import {createRating, deleteRating, getAllRatings, getRatingById, updateRating} from '../controller/ratingController';
import roleCheck from "../utils/roleCheck";

const ratingRouter = express.Router();

// Needs validator middleware
ratingRouter.post("/", roleCheck("USER"), createRating);
ratingRouter.get("/", roleCheck("STORE_OWNER", "ADMIN"), getAllRatings);
ratingRouter.put("/:id", roleCheck('USER'), updateRating);

// Not required for now
ratingRouter.get("/:id", getRatingById);
ratingRouter.delete("/:id", deleteRating);

export default ratingRouter;
