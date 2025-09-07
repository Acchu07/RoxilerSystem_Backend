import {loggerInfo} from "../utils/logger";
import {dbStoreCreate, dbStoreFindAll} from "../model/dbStore";

class ServiceStore {
    constructor() {
        loggerInfo('Invoked Service Store');
    }

    async createStore(store: any) {
        const newStore = await dbStoreCreate(store);
        return newStore;
    }

    async getAllStores() {
        const allStores = await dbStoreFindAll();
        return allStores;
    }
}

export default new ServiceStore();