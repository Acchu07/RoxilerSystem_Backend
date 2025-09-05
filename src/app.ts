import express from "express";
import {loggerInfo} from "./utils/logger.js";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
    loggerInfo("Response sent");
});


export default app;