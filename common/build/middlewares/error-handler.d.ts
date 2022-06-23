import { Request, Response, NextFunction } from "express";
import { ICustomAPIError } from "../errors";
export declare const errorHandlerMiddleware: (err: ICustomAPIError, req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
