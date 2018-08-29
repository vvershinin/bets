import 'babel-polyfill';

import dotenvSafe from 'dotenv-safe';
import dotenv from 'dotenv';
import path from 'path';

import express from 'express';
import csurf from 'csurf';
import axios from 'axios';

import i18nMiddleware from 'i18next-express-middleware';
import cookieParser from 'cookie-parser';
import noFavicon from 'express-no-favicons';

import i18n from './i18n';
import logger from './utils/logger';

import webApp from './apps/web';

/* prevent registering multiple interceptors during development mode */
if (DEVELOPMENT) {
    axios.interceptors.response.handlers = [];
}
const getRequestLogData = (config) => {
    const logData = [];
    logData.push('AXIOS');
    logData.push('REQUEST');
    logData.push(config.method.toUpperCase());
    logData.push(config.url);
    logData.push('CONFIG');
    logData.push(JSON.stringify(config));
    return logData;
};
const getResponseLogData = (response) => {
    const logData = [];
    logData.push('RESPONSE');
    if (response) {
        logData.push(response.status);
        logData.push('HEADERS');
        logData.push(JSON.stringify(response.headers));
        logData.push('DATA');
        logData.push(JSON.stringify(response.data));
    } else {
        logData.push('No Response Received');
    }
    return logData;
};
axios.interceptors.response.use(
    (response) => {
        const logRequestData = getRequestLogData(response.config);
        if (response.status >= 400) {
            const logResponseData = getResponseLogData(response);
            logger.error(...logRequestData);
            logger.debug(...logRequestData, ...logResponseData);
        } else {
            logger.info(...logRequestData);
        }
        return response;
    },
    (error) => {
        const logRequestData = getRequestLogData(error.config);
        const logResponseData = getResponseLogData(error.response);
        logger.error(...logRequestData);
        logger.debug(...logRequestData, ...logResponseData);
        throw error;
    },
);

if (PRODUCTION) {
    dotenvSafe.config();
    dotenv.config({ path: path.resolve(process.cwd(), '.version') });
}

export default ({ clientStats }) => {
    const app = express();
    app.use(noFavicon());
    app.use(cookieParser());
    app.use(i18nMiddleware.handle(i18n));

    app.use(csurf({ cookie: true }));

    app.use(express.static(`./${process.env.PUBLIC_FOLDER}`));
    app.use('/', webApp({ clientStats }));

    /* express needs all 4 parameters to catch errors */
    app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
        logger.error(err);
        if (err.code === 'EBADCSRFTOKEN') {
            res.status(400).send('Bad Request');
        } else {
            res.status(500).send('Internal Server Error');
        }
    });
    return app;
};
