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