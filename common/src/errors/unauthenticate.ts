
import {StatusCodes} from "http-status-codes"
import { CustomAPIError } from '.';

export default class UnauthenticatedError extends CustomAPIError{
    statusCode = StatusCodes.UNAUTHORIZED
    constructor(message: string){
        super(message);
    }
}