import dotenv from 'dotenv';
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import serverConfig from './webpack/webpack.config.server';
import clientConfig from './webpack/webpack.config.client';
import logger from './src/server/utils/logger';

dotenv.config({ path: path.resolve(process.cwd(), '.env.example') });

const app = express();

let isBuilt = false;

const done = () => {
    if (isBuilt) return;
    const port = process.env.APP_SERVER_PORT;
    const host = process.env.APP_SERVER_HOST;
    const server = app.listen(port, host, () => {
        isBuilt = true;
        logger.info(`Server started: http://${host}:${port}`);
    });
};

const compiler = webpack([clientConfig, serverConfig]);

const [clientCompiler] = compiler.compilers;
const options = {
    publicPath: clientConfig.output.publicPath,
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false,
    },
};
app.use('/', webpackDevMiddleware(compiler, options));
app.use('/', webpackHotMiddleware(clientCompiler));
app.use('/', webpackHotServerMiddleware(compiler));
compiler.plugin('done', done);
