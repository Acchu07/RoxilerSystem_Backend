import express from "express";
import cookieParser from "cookie-parser";
import config from './utils/config.js';
import {errorHandler, loggerInfo} from "./utils/logger.js";
import authRouter from "./routes/authRoute";
import dashBoardRouter from "./routes/dashboardRoute";
import storeRouter from "./routes/storeRoute";
import ratingRouter from "./routes/RatingRoutes";
import userRouter from "./routes/userRoutes";

const app = express();

app.use(express.json());
app.use(cookieParser(config.COOKIE_SECRET));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/dashboard', dashBoardRouter);
app.use('/api/v1/store', storeRouter);
app.use('/api/v1/rating', ratingRouter);
app.use('/api/v1/users', userRouter);
app.get("/", (req, res) => {
    res.status(200).json("Base Base Path");
    loggerInfo("Response sent");
});


app.use(errorHandler);

export default app;