import { StatusCodes } from "http-status-codes";
import {CustomAPIError} from "."

export default class BadRequestError extends CustomAPIError{
    statusCode = StatusCodes.BAD_REQUEST
    constructor(message: string){
        super(message);
    }
}