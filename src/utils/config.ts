const port = process.env.PORT;
if (!port) {
    throw new Error('Port is Undefined');
}

// const DATABASE_URL = process.env.DATABASE_URL;;

export default {port};