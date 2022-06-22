import express, {Request, Response} from "express";

const router = express.Router();

router.post("/signout", (req: Request, res: Response) => {
    res.send({message: "Hello Signout!"})
} )

export {router as signoutRouter}