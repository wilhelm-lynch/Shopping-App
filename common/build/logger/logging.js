"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = __importStar(require("winston"));
let logger;
exports.logger = logger;
//Development Logger
if (process.env.NODE_ENV === "development") {
    exports.logger = logger = winston_1.default.createLogger({
        level: "verbose",
        format: winston_1.format.combine(winston_1.format.label({ label: "[LOGGER]" }), winston_1.format.timestamp({ format: "DD-MM-YYYY HH:MM:ss" }), winston_1.format.printf(info => `${info.label} ${info.timestamp} ${info.level} : ${info.message}`)),
        transports: [
            new winston_1.transports.Console()
        ]
    });
}
process.on("unhandledRejection", (reason, p) => logger.warn(`system level exceptions at, Possibly Unhandled Rejection at: Promise ${p}, \n reason: ${reason}`));
