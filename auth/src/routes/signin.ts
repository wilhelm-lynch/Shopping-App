import express, {Request, Response} from "express";

const router = express.Router();

router.post("/signin", (req: Request, res: Response) => {
    res.send({message: "Hello Signin!"})
} )

export {router as signinRouter}