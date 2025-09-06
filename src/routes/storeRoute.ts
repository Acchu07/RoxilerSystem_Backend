import express from "express";
import {createStore, deleteStore, getAllStores, getStoreById, updateStore} from '../controller/storeController';

const storeRouter = express.Router();
// Needs validators and Role based access control
storeRouter.post("/", createStore);
storeRouter.get("/", getAllStores);
storeRouter.get("/:id", getStoreById);
storeRouter.put("/:id", updateStore);
storeRouter.delete("/:id", deleteStore);

export default storeRouter;