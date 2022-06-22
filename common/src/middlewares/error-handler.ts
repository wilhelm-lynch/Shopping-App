import {StatusCodes} from "http-status-codes"
import {Request, Response} from "express"

interface CustomError{
    statusCode: number;
    message: string
}

export const errorHandlerMiddleware = (err: CustomError , req: Request, res: Response) => {
    let customError: CustomError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        message: err.message || "Something went wrong, try again later" 
    }

    return res.status(customError.statusCode).json({message: customError.message})
}