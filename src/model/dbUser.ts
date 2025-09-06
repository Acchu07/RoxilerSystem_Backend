import Database from "./prismaDBSingleInstance";
import {RegisterUser, UserPresent, UserRegistered, UserToUpdate} from "../types/allTypes";

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

export const dbUserFindAll = async () => {
    const allUsers = await prisma.user.findMany({
        select: {
            name: true,
            email: true,
            address: true,
            role: true
        }
    });
    return allUsers;
};

export const dbUserUpdate = async (userObject: UserToUpdate) => {
    const updatedUser = await prisma.user.update({
        where: {
            id: userObject.id,
        },
        data: {
            password: userObject.password,
        },
        select: {
            name: true
        }
    });
    return updatedUser;
};