import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const AppRoute = ({ component: Component, layout: Layout, isLoggedIn, ...rest }) => (
    <Route
        { ...rest }
        render={ props => (
            <Layout isLoggedIn={ () => isLoggedIn }>
                <Component { ...props } />
            </Layout>
        ) }
    />
);

AppRoute.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
    layout: PropTypes.func.isRequired
};

export default AppRoute;
