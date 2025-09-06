import {loggerInfo} from "../utils/logger";
import bcrypt from "bcrypt";
import {UserWithToken} from "../types/allTypes";
import jwt from "jsonwebtoken";
import config from "../utils/config";

class ServiceAuth {
    constructor() {
        loggerInfo("Calling Auth Service");
    }

    static async hashPassword(password: string) {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    };

    static async verifyPassword(password: string, hashedPassword: string) {
        const isTrue = await bcrypt.compare(password, hashedPassword);
        return isTrue;
    }

    static generateToken(userPayload: UserWithToken) {
        return jwt.sign({
            exp: config.EXPIRATION_TIME,
            data: userPayload
        }, config.JWT_SECRET);
    }
}

let serviceAuth: ServiceAuth | null = new ServiceAuth();
serviceAuth = null;


export default ServiceAuth;