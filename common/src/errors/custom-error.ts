import {StatusCodes} from "http-status-codes"

export default class CustomAPIError extends Error{
    constructor(public message: string){
        super(message);

        Error.captureStackTrace(this, this.constructor);
    }
}