import CustomAPIError from "./custom-error";
import { StatusCodes } from 'http-status-codes';
export default class NotFoundError extends CustomAPIError {
    statusCode: StatusCodes;
    constructor(message: string);
}
