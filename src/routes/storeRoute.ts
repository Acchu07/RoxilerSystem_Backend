import express from "express";
import {
    createStore,
    deleteStore,
    getAllStores,
    getStoreById,
    storeOwnerNoStore,
    updateStore
} from '../controller/storeController';
import roleCheck from "../utils/roleCheck";
import {validatedStoreCreation} from "../utils/expressValidatorSchemas";

const storeRouter = express.Router();
// Needs validator middleware
// Role based access control - maybe redo this where it reads from a hashmap or file if i have time left
storeRouter.post("/", roleCheck("ADMIN"), validatedStoreCreation, createStore);
storeRouter.get("/", roleCheck("ADMIN"), getAllStores);


// Temp Fix routes
storeRouter.get("/storelessOwner", roleCheck("ADMIN"), storeOwnerNoStore);


// Not required for now and the temp fix breaks req params considering sequence should have planned better
storeRouter.get("/:id", roleCheck("STORE_OWNER", "ADMIN"), getStoreById);
storeRouter.put("/:id", updateStore);
storeRouter.delete("/:id", deleteStore);

export default storeRouter;