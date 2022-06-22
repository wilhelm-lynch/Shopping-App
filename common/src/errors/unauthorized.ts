import {StatusCodes} from "http-status-codes";
import { CustomAPIError } from '.';

export default class UnauthorizedError extends CustomAPIError{
    statusCode = StatusCodes.FORBIDDEN
    constructor(message: string){
        super(message);
    }
}