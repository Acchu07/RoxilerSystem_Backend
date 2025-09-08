import express from "express";
import {createStore, deleteStore, getAllStores, getStoreById, updateStore} from '../controller/storeController';
import roleCheck from "../utils/roleCheck";

const storeRouter = express.Router();
// Needs validator middleware
// Role based access control - maybe redo this where it reads from a hashmap or file if i have time left
storeRouter.post("/", roleCheck("ADMIN"), createStore);
storeRouter.get("/", roleCheck("ADMIN"), getAllStores);
storeRouter.get("/:id", roleCheck("STORE_OWNER", "ADMIN"), getStoreById);

// Not required for now
storeRouter.put("/:id", updateStore);
storeRouter.delete("/:id", deleteStore);

export default storeRouter;