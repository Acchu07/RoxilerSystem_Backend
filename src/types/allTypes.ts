import {User} from "@prisma/client";

type RegisterUser = Pick<User, "name" | "password" | "email" | "address">;
type UserRegistered = Pick<User, "name" | "email">;
type UserPresent = Pick<User, "id" | "name" | "email" | "password"> | null;
type LoginUser = Pick<User, "email" | "password">;
type UserWithToken = Pick<User, "id" | "email">;

export type {RegisterUser, UserPresent, UserRegistered, LoginUser, UserWithToken};