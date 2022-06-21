import { Request, Response, NextFunction } from "express";
interface UserPayload {
    id: string;
    email: string;
}
declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}
declare const currentUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default currentUser;
