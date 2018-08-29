import webpack from 'webpack';
import serverConfig from './webpack/webpack.config.server';
import clientConfig from './webpack/webpack.config.client';
import logger from './src/server/utils/logger';

const compiler = webpack([clientConfig, serverConfig]);
compiler.run(() => {
    logger.info('Build COMPLETE.');
});

