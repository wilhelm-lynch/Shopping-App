import {StatusCodes} from "http-status-codes"

export default abstract class CustomAPIError extends Error{
    abstract statusCode: number;
    
    constructor(message: string){
        super(message);
        Object.setPrototypeOf(this, CustomAPIError.prototype)
        
        Error.captureStackTrace(this, this.constructor);
    }
}

export interface ICustomAPIError{
    message: string;
    statusCode: number;
}