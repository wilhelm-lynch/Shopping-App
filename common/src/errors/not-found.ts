import CustomAPIError from "./custom-error"
import { StatusCodes } from 'http-status-codes';

export default class NotFoundError extends CustomAPIError{
    statusCode = StatusCodes.NOT_FOUND
    constructor(message: string){
        super(message);
    }
}