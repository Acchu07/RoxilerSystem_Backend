import app from "./app.js";
import config from './utils/config.js';
import {loggerInfo} from "./utils/logger.js";

app.listen(config.port, () => {
    loggerInfo(`Example app listening on port ${config.port}`);
});