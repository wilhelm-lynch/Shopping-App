import "express-async-errors"
import {errorHandlerMiddleware, NotFoundError, routesNotFound} from "@density-shopping/common"
import express, {Express, Request, Response} from "express";
import cookieParser from "cookie-parser"
import helmet from "helmet"
import cors from "cors"
process.env["NODE_CONFIG_DIR"] = __dirname;
import config from "config"
import {routes} from "../routes"


export default class ExpressConfig{
    app: Express;

    constructor(){
        this.app = express()
        this.app.set("trust proxy", true)
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true, limit: "1mb"}))
        this.app.use(cors())
        this.app.use(helmet())
        this.app.use(cookieParser())
        this.app.use(config.get("URI"), routes);
        this.app.use(routesNotFound);
            
        this.app.use(errorHandlerMiddleware)
    }
}