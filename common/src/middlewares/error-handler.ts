import {StatusCodes} from "http-status-codes"
import {Request, Response, NextFunction} from "express"
import {ICustomAPIError} from "../errors"

export const errorHandlerMiddleware = (err: ICustomAPIError , req: Request, res: Response, next: NextFunction) => {
    let customError: ICustomAPIError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        message: err.message || "Something went wrong, try again later" 
    }

    return res.status(customError.statusCode).json({data: [{status: "failed", message: customError.message, path: "error"}]})
}