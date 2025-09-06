import Database from "./prismaDBSingleInstance";
import {RegisterUser, UserPresent, UserRegistered} from "../types/allTypes";

const prisma = Database.getInstance();

export const dbUserCreate = async (dataObj: RegisterUser) => {
    const newUser: UserRegistered = await prisma.user.create({
        data: dataObj,
        select: {
            name: true,
            email: true,
        }
    });
    return newUser;
};

export const dbUniqueUserFind = async (email: string) => {
    const user: UserPresent = await prisma.user.findUnique({
        where: {
            email: email
        },
        select: {
            id: true,
            name: true,
            email: true,
            password: true,
            role: true
        }
    });
    return user;
};