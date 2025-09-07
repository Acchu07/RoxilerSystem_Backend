const PORT = process.env.PORT;
if (!PORT) {
    throw new Error('Port is Undefined');
}
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is Undefined');
}

const COOKIE_SECRET = process.env.COOKIE_SECRET;
if (!COOKIE_SECRET) {
    throw new Error('COOKIE_SECRET is Undefined');
}
// const DATABASE_URL = process.env.DATABASE_URL;;

const EXPIRATION_TIME = Math.floor(Date.now() / 1000) + (120 * 120);

const CORS_OPTIONS = {
    origin: 'http://localhost:5173',
};


export default {PORT, JWT_SECRET, COOKIE_SECRET, EXPIRATION_TIME, CORS_OPTIONS};