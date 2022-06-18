import express, {Express, Request, Response} from "express";
import "express-async-errors"
import cookieParser from "cookie-parser"
import helmet from "helmet"
import cors from "cors"

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

        this.app.get("/test", (req, res) => {
            res.status(200).json({message: "this is a test"});
        })

        this.app.all("*",  async (req: Request, res: Response) => {
            throw new Error("Route not found");
        })
    }
}