import { Request, Response } from "express";
interface CustomError {
    statusCode: number;
    message: string;
}
export declare const errorHandlerMiddleware: (err: CustomError, req: Request, res: Response) => Response<any, Record<string, any>>;
export {};
