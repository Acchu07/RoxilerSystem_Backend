import {adminDashBoardCount} from "../model/dbCustom";

class AdminDashboard {

    async getDashboard() {
        const data = await adminDashBoardCount();
        return data;
    }

}

class NormalUserDashboard {

    getDashboard() {
        return "Normal User Dashboard";
    }
}

class StoreOwnerDashboard {

    getDashboard() {
        return "Store Owner Dashboard";
    }
}

function createDashboard(role: string) {
    switch (role) {
        case 'ADMIN':
            return new AdminDashboard();
        case 'USER':
            return new NormalUserDashboard();
        case 'STORE_OWNER':
            return new StoreOwnerDashboard();
        default:
            throw new Error("Invalid role");
    }
}

export default createDashboard;