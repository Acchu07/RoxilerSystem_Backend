import Database from "./prismaDBSingleInstance";
import {RegisterStore} from "../types/allTypes";

const prisma = Database.getInstance();

export const dbStoreCreate = async (storeObject: RegisterStore) => {
    const newStore = await prisma.store.create({
        data: {
            name: storeObject.name,
            email: storeObject.email,
            address: storeObject.address,
            ownerId: storeObject.ownerId,
        }
    });
    return newStore;
};

