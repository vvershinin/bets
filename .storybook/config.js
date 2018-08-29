import React from 'react';
import { configure } from '@storybook/react';
import './../src/client/styles/global.scss';

import { addDecorator, action } from '@storybook/react'
import { Router } from 'react-router'
import createMemoryHistory from 'history/createMemoryHistory'

const history = createMemoryHistory();
history.push = action('history.push');
history.replace = action('history.replace');
history.go = action('history.go');
history.goBack = action('history.goBack');
history.goForward = action('history.goForward');

addDecorator(story => <Router history={history}>{story()}</Router>);

const styles = {
    padding: '0 20px'
};
const CenterDecorator = storyFn => (
    <div style={ styles }>
        { storyFn() }
    </div>
);
addDecorator(CenterDecorator);



const req = require.context('../src/client', true, /\.stories\.js$/)

function loadStories() {
    req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
