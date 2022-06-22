"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomAPIError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = CustomAPIError;
