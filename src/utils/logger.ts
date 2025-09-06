import type {ErrorRequestHandler} from "express";

export function loggerInfo(...params: string[]) {
    if (process.env.NODE_ENV === 'DEV') {
        console.log(...params);
    }

}

export function loggerError(...params: string[]) {
    if (process.env.NODE_ENV === 'DEV') {
        console.log(...params);
    }
}

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    switch (err.message) {
        case'USER_EXISTS':
            return res.status(409).json('User Exists in DB');
        default:
            console.log(err.message);
            console.error(err.stack);
            res.status(500).send('Something broke!');
    }

};