import {loggerInfo} from "../utils/logger";
import ServiceAuth from "./serviceAuth";
import serviceAuth from "./serviceAuth";
import {LoginUser, RegisterUser, UserPresent, UserRegistered} from "../types/allTypes";
import {dbUniqueUserFind, dbUserCreate} from "../model/dbUser";

class ServiceUser {
    constructor() {
        loggerInfo('Invoked Service User');
    }

    async createUser(user: RegisterUser): Promise<UserRegistered | UserPresent> {
        // Validator here or in a middleware? - Do in Middleware
        const userPresent = await dbUniqueUserFind(user.email);
        if (userPresent) {
            return userPresent;
        }
        const hashedpassword = await ServiceAuth.hashPassword(user.password);
        const registerNewUser = {...user, password: hashedpassword};
        const userRegistered = await dbUserCreate(registerNewUser);
        return userRegistered;
    }

    async LoginUser(user: LoginUser) {
        const userPresent = await dbUniqueUserFind(user.email);
        if (userPresent) {
            const correctPassword = await ServiceAuth.verifyPassword(user.password, userPresent.password);
            if (correctPassword) {
                const token = serviceAuth.generateToken({
                    id: userPresent.id,
                    email: userPresent.email,
                    role: userPresent.role
                });
                return token;
            }
        }
        return false;
    }
}


export default new ServiceUser();