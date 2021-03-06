import winston, {format, Logger, transports} from "winston";

const colorizer = format.colorize();

let logger: Logger
//Development Logger
if(process.env.NODE_ENV === "development"){
    logger = winston.createLogger({
        level: "verbose",
        format: format.combine(
            format.label({label: "[LOGGER]"}),
            format.timestamp({format: "DD-MM-YYYY HH:MM:ss"}),
            format.printf(info => colorizer.colorize(info.level,`${info.label} ${info.timestamp} ${info.level} : ${info.message}`))
        ),
        transports: [
            new transports.Console()
        ]
    });
}

process.on("unhandledRejection", (reason, p) => logger.warn(`system level exceptions at, Possibly Unhandled Rejection at: Promise ${p}, \n reason: ${reason}`))

export {logger}