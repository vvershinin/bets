import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';

const Html = ({ store, app, i18n, language, clientStats }) => {
    const initialState = JSON.stringify(store);
    const appHtml = renderToString(app);
    const head = Helmet.renderStatic();

    const {
        Js,
        CssHash,
        stylesheets,
        publicPath
    } = flushChunks(clientStats, { chunkNames: flushChunkNames() });

    return (
        <html lang="en">
            <head>
                { head.base.toComponent() }
                { head.title.toComponent() }
                { head.meta.toComponent() }
                { head.link.toComponent() }
                { head.script.toComponent() }
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=0" />

                { stylesheets.map(file => <link rel="stylesheet" href={ `${publicPath}/${file}` } />) }
            </head>
            <body>
                <main id="App" dangerouslySetInnerHTML={ { __html: appHtml } } />
                <script dangerouslySetInnerHTML={ { __html: `window.data = ${initialState};` } } defer={ true } />
                <script dangerouslySetInnerHTML={ { __html: `window.env = ${JSON.stringify(store.env)};` } } defer={ true } />
                <script dangerouslySetInnerHTML={ { __html: `window.i18n = ${JSON.stringify(i18n)};` } } defer={ true } />
                <script dangerouslySetInnerHTML={ { __html: `window.language = ${JSON.stringify(language)};` } } defer={ true } />
                <Js />
                <CssHash />
            </body>
        </html>
    );
};

export default Html;
