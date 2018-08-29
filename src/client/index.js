import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import App from './app';
import i18n from './i18n';
import createStore from './store-redux';

const initialState = JSON.parse(JSON.stringify(window.data));

const render = app => ReactDOM.hydrate(
    <I18nextProvider i18n={ i18n } initialI18nStore={ window.i18n } initialLanguage={ window.language }>
        <Provider store={ createStore(initialState) }>
            <BrowserRouter>
                <Route component={ app } />
            </BrowserRouter>
        </Provider>
    </I18nextProvider>,
    document.getElementById('App'),
);

if (DEVELOPMENT && module.hot) {
    module.hot.accept('./app.js', () => {
        render(require('./app').default);
    });
}
render(App);
