import React from 'react';
import { Switch } from 'react-router-dom';

import RouteWithLayout from '../index';
import Layout from '../../../containers/Layout/layout';
import Component from '../../CommentsCount';

const RouteWithLayoutExample = () => (
    <Switch>
        <RouteWithLayout
            path={ '/path1' }
            exact
            layout={ Layout }
            component={ Component }
        />
        <RouteWithLayout
            path={ '/path2' }
            layout={ Layout }
            component={ Component }
        />
        <RouteWithLayout
            path={ '/path3' }
            layout={ Layout }
            component={ Component }
        />
    </Switch>
);

export default RouteWithLayoutExample;
