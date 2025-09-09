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

// Terrible error handling redo this if time left
export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log(err)
    switch (err.code) {
        case 'P2002':
            return res.status(409).json('One Store One Owner and Owner has a store');
    }

    switch (err.message) {
        case'USER_EXISTS':
            return res.status(409).json({message: 'User Exists in DB'});
        default:
            console.log('This is the Message');
            console.error(err.message);
            console.log('This is the stack');
            console.error(err.stack);
            console.log('Full Error Message');
            console.error(err);
            res.status(500).send('Something broke!');
    }

};