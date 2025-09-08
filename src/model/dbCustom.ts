import Database from "./prismaDBSingleInstance";

const prisma = Database.getInstance();

export async function adminDashBoardCount() {
    const totalUsers = await prisma.user.count();
    const totalStores = await prisma.store.count();
    const totalRatings = await prisma.rating.count();

    return {totalUsers, totalStores, totalRatings};


    // Raw query returns 2n i need to look up docs but it works directly in psql cli - Look up their TypedSQL
    // Will be more efficient to figure it out - look up later
    // prisma.$queryRaw`SELECT (SELECT COUNT(*) FROM "User"),
    //                                (SELECT COUNT(*) FROM "Store"),
    //                                (SELECT COUNT(*) FROM "Rating");
    // `;
}