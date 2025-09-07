import {Rating, Store, User} from "@prisma/client";

type RegisterUser = Pick<User, "name" | "password" | "email" | "address">;
type UserRegistered = Pick<User, "name" | "email">;
type UserPresent = Pick<User, "id" | "name" | "email" | "password" | "role"> | null;
type LoginUser = Pick<User, "email" | "password">;
type UserWithToken = Pick<User, "id" | "email" | "role">;
type UserToUpdate = Pick<User, "id" | "password">;

type RegisterStore = Pick<Store, "name" | "email" | "address" | "ownerId">;

type RegisterRating = Pick<Rating, "value" | "storeId" | "userId">;

interface jwtPayload {
    exp: number;
    data: UserWithToken;
    iat: number;
}

type Role = "ADMIN" | "STORE_OWNER" | "USER";

export type {
    RegisterUser,
    UserPresent,
    UserRegistered,
    LoginUser,
    UserWithToken,
    jwtPayload,
    RegisterStore,
    RegisterRating,
    UserToUpdate,
    Role
};