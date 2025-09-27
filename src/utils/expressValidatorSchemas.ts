import {checkSchema} from "express-validator";

const defaultSanitizer = {trim: true, escape:true}; // on hold if i store escaped characters in db i would need to convert them back when sending or convert at frontend

export const validateRegisterationUser = checkSchema({
    name: {
        trim: true,
        isLength: {
            options: { min: 4, max: 60 },
            errorMessage: "Name must be 20-60 characters",
        },
    },
    email: {
        trim: true,
        isEmail: {
            errorMessage: "Invalid email",
        },
    },
    password: {

        isLength: {
            options: { min: 8, max: 16 },
            errorMessage: "Password must be 8-16 characters",
        }
    //     Figure out how to get the pattern later
    },
    address: {
        trim: true,
        isLength: {
            options: { max: 400 },
            errorMessage: "Address can be max 400 characters",
        },
    },
});

export const validateAdminRegistrationUser = checkSchema({
    role: {
        isIn: {
            options: [["ADMIN","STORE_OWNER","USER"]],
            errorMessage: "Role must be ADMIN or STORE_OWNER or USER",
        },
    },
});

