import {StatusCodes} from "http-status-codes"

export default abstract class CustomAPIError extends Error{
    constructor(message: string){
        super(message);

        Error.captureStackTrace(this, this.constructor);
    }
}

export interface ICustomAPIError{
    message: string;
    statusCode: number;
}