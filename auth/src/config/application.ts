import {logger, errorHandlerMiddleware} from "@density-shopping/common"
import ExpressConfig from "./express";

export default class Application{
    server: unknown
    express: ExpressConfig

    constructor(){
        this.express = new ExpressConfig();
        const port = 3000;
        this.express.app.listen(port, () => logger.info(`Server listening at http://localhost:${port}`))
    }
}