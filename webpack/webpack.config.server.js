import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import autoprefixer from 'autoprefixer';
import { getIfUtils, removeEmpty } from 'webpack-config-utils';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const resolve = p => path.resolve(__dirname, p);

const externals = fs
    .readdirSync(resolve('../node_modules'))
    .filter(x => !/\.bin|react-universal-component|webpack-flush-chunks/.test(x))
    .reduce((external, mod) => {
        external[mod] = `commonjs ${mod}`;
        return external;
    }, {});

externals['react-dom/server'] = 'commonjs react-dom/server';

const { ifDevelopment, ifProduction } = getIfUtils(String(process.env.NODE_ENV));

export default removeEmpty({
    name: 'server',
    target: 'node',
    devtool: ifDevelopment('source-map'),
    entry: resolve('../src/server/index.js'),
    // PLS DO NOT REMOVE THIS LINE
    externals: ifDevelopment(externals),
    output: {
        path: resolve('../dist'),
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        publicPath: '/'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json', '.scss'],
        modules: ['node_modules', 'src']
    },
    node: {
        __dirname: true,
        __filename: true,
        console: true,
        global: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules(?!\/react-google-maps)/,
                use: 'babel-loader'
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: ifDevelopment(),
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: ifDevelopment(),
                            plugins: () => [
                                autoprefixer({
                                    browsers: [
                                        'last 3 version',
                                        'ie >= 9'
                                    ]
                                })
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: ifDevelopment()
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: ifDevelopment('img/[name].[ext]', 'img/[name].[hash].[ext]')
                }
            },
            {
                test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader',
                options: {
                    name: ifDevelopment('fonts/[name].[ext]', 'fonts/[name].[hash].[ext]')
                }
            }
        ]
    },
    plugins: removeEmpty([
        // new LodashModuleReplacementPlugin({
        //     'collections': true,
        //     'paths': true,
        // }),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        }),
        new webpack.DefinePlugin(removeEmpty({
            PRODUCTION: JSON.stringify(ifProduction()),
            DEVELOPMENT: JSON.stringify(ifDevelopment()),
            'process.env.NODE_ENV': JSON.stringify(ifProduction('production')),
            ...ifDevelopment({
                'process.env.APP_VERSION': JSON.stringify('development')
            })
        })),
        ifProduction(
            new CopyWebpackPlugin([
                { from: resolve('../src/start.js'), to: resolve('../dist') },
                { from: resolve('../.env.example'), to: resolve('../dist') }
            ])
        ),
        ifProduction(
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                reportFilename: './analyze/server.html',
                openAnalyzer: false
            })
        ),
        ifProduction(
            new webpack.NamedModulesPlugin(),
        )
    ])
});
