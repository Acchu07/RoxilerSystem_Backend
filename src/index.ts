import app from "./app.js";
import config from './utils/config.js';
import {loggerInfo} from "./utils/logger.js";

app.listen(config.PORT, () => {
    loggerInfo(`Example app listening on port ${config.PORT}`);
});