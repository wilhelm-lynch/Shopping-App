"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = exports.currentUser = void 0;
const current_user_1 = __importDefault(require("./current-user"));
exports.currentUser = current_user_1.default;
const error_handler_1 = require("./error-handler");
Object.defineProperty(exports, "errorHandlerMiddleware", { enumerable: true, get: function () { return error_handler_1.errorHandlerMiddleware; } });
