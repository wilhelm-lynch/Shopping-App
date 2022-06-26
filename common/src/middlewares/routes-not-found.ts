import express, {Request, Response} from "express"
import {NotFoundError} from "../errors"
const router = express.Router();

router.all("*", async(req: Request, res: Response) => {
    throw new NotFoundError("Route not found")
})


export {router as routesNotFound}