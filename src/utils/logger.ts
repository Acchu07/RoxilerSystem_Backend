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
    // Switch Statement for error handling but how to figure out what type of error it is?
    // Check express 5 new error handling for async
    console.error(err.stack);
    res.status(500).send('Something broke!');
};