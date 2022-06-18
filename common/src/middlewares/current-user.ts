import {Request, Response, NextFunction} from "express"
import jwt from "jsonwebtoken"

interface UserPayload{
    id: string,
    email: string
}

declare global{
    namespace Express{
        interface Request{
            currentUser?: UserPayload
        }
    }
}

const currentUser = async (req: Request, res: Response, next: NextFunction) => {
    if(!req.cookies?.token) return next();

    try{
        const payload = jwt.verify(req.cookies.token, process.env.JWT_SECRET!) as UserPayload;
        req.currentUser = payload
    }
    catch{}
    next()
}

export default currentUser;