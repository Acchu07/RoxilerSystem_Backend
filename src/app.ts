import express from "express";
import cookieParser from "cookie-parser";
import {errorHandler, loggerInfo} from "./utils/logger.js";
import authRouter from "./routes/authRoute";
import dashBoardRouter from "./routes/dashboardRoute";
import storeRouter from "./routes/storeRoute";
import ratingRouter from "./routes/RatingRoutes";
import userRouter from "./routes/userRoutes";
import cors from "cors";
import config from './utils/config';
import tokenVerification from "./utils/tokenVerification";

const app = express();


app.use(express.json());
app.use(cookieParser(config.COOKIE_SECRET));
app.use(cors(config.CORS_OPTIONS));

app.get("/", (req, res) => {
    res.status(200).json("Base Path Check and It Works");
    loggerInfo("Response sent");
});

app.use('/api/v1/auth', authRouter);

app.use(tokenVerification);
app.use('/api/v1/dashboard', dashBoardRouter);
app.use('/api/v1/store', storeRouter);
app.use('/api/v1/rating', ratingRouter);
app.use('/api/v1/users', userRouter);


app.use(errorHandler);

export default app;