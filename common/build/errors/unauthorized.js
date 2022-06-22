"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const _1 = require(".");
class UnauthorizedError extends _1.CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = http_status_codes_1.StatusCodes.FORBIDDEN;
    }
}
exports.default = UnauthorizedError;
