import express, {Request, Response} from "express";
import {currentUser} from "@density-shopping/common"

const router = express.Router();

router.get("/currentuser", currentUser, (req: Request, res: Response) => {
    res.send({currentUser: req.currentUser || null})
} )

export {router as currentUserRouter}