import winston from 'winston';

const transports = [
    new winston.transports.Console({
        json: false,
        colorize: process.env.LOG_COLOR ? process.env.LOG_COLOR : false,
        timestamp: true,
        handleExceptions: true
    })
];

const logger = new winston.Logger({
    level: process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'info',
    transports
});

export default logger;
