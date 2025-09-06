import express from "express";
import cookieParser from "cookie-parser";
import config from './utils/config.js';
import {errorHandler, loggerInfo} from "./utils/logger.js";
import adminRouter from "./routes/adminRoute";
import authRouter from "./routes/authRoute";

const app = express();

app.use(express.json());
app.use(cookieParser(config.COOKIE_SECRET));

app.use('/api/admin', adminRouter);
app.use('/api/auth', authRouter);
app.get("/", (req, res) => {
    res.status(200).json("Base Base Path");
    loggerInfo("Response sent");
});


app.use(errorHandler);

export default app;