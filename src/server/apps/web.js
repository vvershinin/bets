import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import reactTreeWalker from 'react-tree-walker';
import express from 'express';
import asyncHandler from 'express-async-handler';
import { Provider } from 'react-redux';

import Html from './web/Html';
import App from '../../client/app';
import createStore from '../../client/store-redux';
import rootSaga from '../../client/sagas';
import { getInitialI18nStore } from './web/locales';

const initialState = {};

export default ({ clientStats }) => {
    const env = {
        APP_VERSION: process.env.APP_VERSION,
        API_URI: process.env.API_URI
    };
    const webApp = async (req, res) => {
        const context = {};
        initialState.env = env;
        const reduxStore = createStore(initialState);
        const app = (
            <I18nextProvider i18n={ req.i18n }>
                <Provider store={ reduxStore }>
                    <StaticRouter context={ context } location={ req.url }>
                        <App />
                    </StaticRouter>
                </Provider>
            </I18nextProvider>
        );

        const namespaces = new Set();
        // const initialStatePromises = [];
        await reactTreeWalker(app, (element, instance) => {
            if (instance && instance.namespaces) {
                namespaces.add(...instance.namespaces);
            }
            // if (instance && instance.getInitialState) {
            //     let promises = instance.getInitialState(req);
            //     promises = Array.isArray(promises) ? promises : [promises];
            //     initialStatePromises.push(...promises);
            // }
        });

        reduxStore.runSaga(rootSaga).done.then(() => {
            const html = renderToString(
                <Html
                    clientStats={ clientStats }
                    store={ initialState }
                    app={ app }
                    i18n={ getInitialI18nStore(namespaces, req.i18n) }
                    language={ req.i18n.language }
                />,
            );
            res.send(`<!doctype html>\n${html}`);
        });
        reduxStore.close();
    };

    const app = express();
    app.use('/', asyncHandler(webApp));
    return app;
};
