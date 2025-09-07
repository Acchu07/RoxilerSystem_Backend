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

export const dbStoreFindAll = async () => {
    // const allStores = await prisma.store.findMany({
    //     select: {
    //         id: true,
    //         name: true,
    //         email: true,
    //         address: true,
    //         ownerId: true,
    //         ratings: {
    //             select: {
    //                 value: true,
    //             }
    //         }
    //     }
    // });

    const allStores = await prisma.$queryRaw`
        SELECT S.id,
               S.name,
               S.email,
               S.address,
               S."ownerId",
               AVG(R.value) AS "Average Rating"
        FROM "Store" as S
                 INNER JOIN "Rating" AS R ON R."storeId" = S.id
        GROUP BY S.id
    `;
    return allStores;
};