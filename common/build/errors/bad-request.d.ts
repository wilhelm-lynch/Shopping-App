import { StatusCodes } from "http-status-codes";
import { CustomAPIError } from ".";
export default class BadRequestError extends CustomAPIError {
    statusCode: StatusCodes;
    constructor(message: string);
}
