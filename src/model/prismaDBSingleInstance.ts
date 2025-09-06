import {PrismaClient} from "@prisma/client";
import {loggerInfo} from "../utils/logger";

class Database {
    private static instance: PrismaClient;

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new PrismaClient();
        }
        return Database.instance;
    }

    static async shutdown() {
        if (Database.instance) {
            loggerInfo("Shutting down Prisma");
            await Database.instance.$disconnect();
        }
    }
}

process.on("SIGINT", async () => {
    await Database.shutdown();
    process.exit();
});

export default Database;
