import path from 'path';
import webpack from 'webpack';
import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';
import { StatsWriterPlugin } from 'webpack-stats-plugin';
import autoprefixer from 'autoprefixer';
import { getIfUtils, removeEmpty } from 'webpack-config-utils';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const resolve = p => path.resolve(__dirname, p);
const { ifDevelopment, ifProduction } = getIfUtils(String(process.env.NODE_ENV));

export default removeEmpty({
    name: 'client',
    target: 'web',
    devtool: ifDevelopment('source-map'),
    entry: {
        main: removeEmpty([
            ifDevelopment('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false'),
            resolve('../src/client/index.js')
        ]),
        vendor: [
            'react',
            'react-dom',
            'react-router',
            'react-router-dom',
            'react-universal-component',
            'react-helmet',
            'react-i18next',
            'prop-types',
            'classnames',
            'axios',
            'i18next'
        ]
    },
    output: {
        filename: ifDevelopment('js/[name].js', 'js/[name].[chunkhash].js'),
        chunkFilename: ifDevelopment('js/[name].js', 'js/[name].[chunkhash].js'),
        path: resolve('../dist/public'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json', '.scss'],
        modules: ['node_modules', 'src']
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
                use: ExtractCssChunks.extract({
                    fallback: [{
                        loader: 'style-loader'
                    }],
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: ifDevelopment(),
                                importLoaders: true
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
                                            'ie >= 10'
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
                })
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
        //     collections: true
        // }),
        // ifDevelopment(new WriteFilePlugin()),
        new webpack.DefinePlugin(removeEmpty({
            PRODUCTION: JSON.stringify(ifProduction()),
            DEVELOPMENT: JSON.stringify(ifDevelopment()),
            'process.env.NODE_ENV': JSON.stringify(ifProduction('production'))
        })),
        new ExtractCssChunks({
            filename: ifDevelopment('css/[name].css', 'css/[name].[contenthash].css')
        }),

        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'], // needed to put vendor code before bootstrap
            minChunks: Infinity
        }),

        new webpack.optimize.CommonsChunkPlugin({
            names: ['bootstrap'], // needed to put webpack bootstrap code before chunks
            minChunks: Infinity
        }),

        ifProduction(
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            })
        ),
        ifProduction(
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    screw_ie8: true,
                    conditionals: true,
                    unused: true,
                    comparisons: true,
                    sequences: true,
                    dead_code: true,
                    evaluate: true,
                    if_return: true,
                    join_vars: true
                },
                output: {
                    comments: false
                }
            })
        ),

        ifProduction(
            new StatsWriterPlugin({
                filename: '../stats.json',
                fields: [
                    'assetsByChunkName',
                    'chunks',
                    'modules',
                    'publicPath'
                ],
                transform(data) {
                    return JSON.stringify({
                        assetsByChunkName: data.assetsByChunkName,
                        chunks: data.chunks.map(chunk => ({
                            id: chunk.id,
                            files: chunk.files
                        })),
                        modules: data.modules.map(module => ({
                            id: module.id,
                            name: module.name,
                            chunks: module.chunks
                        })),
                        publicPath: data.publicPath
                    });
                }
            }),
        ),

        ifDevelopment(
            new webpack.HotModuleReplacementPlugin()
        ),
        ifDevelopment(
            new webpack.NoEmitOnErrorsPlugin()
        ),

        ifProduction(
            new webpack.HashedModuleIdsPlugin()
        ),
        ifProduction(
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                reportFilename: resolve('../dist/analyze/client.html'),
                openAnalyzer: false
            })
        )
    ])
});
