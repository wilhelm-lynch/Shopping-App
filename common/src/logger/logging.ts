import winston, {format, Logger} from "winston";

let logger: Logger
//Development Logger
if(process.env.NODE_ENV === "development"){
    logger = winston.createLogger({
        level: "verbose",
        transports: [
            new winston.transports.Console({
                format: format.combine(
                    format.colorize(), format.combine(format.colorize({all: true}), format.label({label: "[LOGGER]"}), format.timestamp({format: "DD-MM-YYYY HH:MM:ss"}),
                    format.printf(info => `${info.label} ${info.timestamp} ${info.level} : ${info.message}`))
                )
            })
        ]
})
}

process.on("unhandledRejection", (reason, p) => logger.warn(`system level exceptions at, Possibly Unhandled Rejection at: Promise ${p}, \n reason: ${reason}`))

export {logger}