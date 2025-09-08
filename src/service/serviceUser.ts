import {loggerInfo} from "../utils/logger";
import ServiceAuth from "./serviceAuth";
import serviceAuth from "./serviceAuth";
import {LoginUser, RegisterUser, UserPresent, UserRegistered} from "../types/allTypes";
import {dbUniqueUserFind, dbUserCreate, dbUserFindAll, dbUserUpdate} from "../model/dbUser";
import type {Request} from "express";

// Should have had admin and store owner extend from this class
// This should have been an inheritance from an abstract class there are commonalities
class ServiceUser {
    constructor() {
        loggerInfo('Invoked Service User');
    }

    async createUser(user: RegisterUser): Promise<UserRegistered | UserPresent> {
        // Validator here or in a middleware? - Do in Middleware
        const userPresent = await dbUniqueUserFind(user.email);
        if (userPresent) {
            throw new Error("USER_EXISTS");
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
                return {role: userPresent.role, token};
            }
        }
        return false;
    }

    async getAllUser() {
        const allUsers = await dbUserFindAll();
        return allUsers;
    }

    async updateUser(reqObject: Request) {
        const id: number = reqObject.token.data.id;
        const password: string = reqObject.body.password;
        const userObject = {id: id, password: password};
        const hashedpassword = await ServiceAuth.hashPassword(userObject.password);
        userObject.password = hashedpassword;
        const updatedUser = await dbUserUpdate(userObject);
        return updatedUser;
    };

    async retrieveDashBoardInfo() {

    }
}


export default new ServiceUser();