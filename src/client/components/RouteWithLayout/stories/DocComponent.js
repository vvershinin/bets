import PropTypes from 'react-peek/prop-types';
import RouteWithLayout from '../../RouteWithLayout';

RouteWithLayout.displayName = 'RouteWithLayout component';

RouteWithLayout.peek = {
    description: 'Route component to which the wrapper component is transferred. In our case, this is a Layout component',
    categories: ['route', 'component']
};

RouteWithLayout.propTypes = {
    component: PropTypes.func.isRequired`Component that wraps`,
    layout: PropTypes.func.isRequired`Wrap Component`
};

export default RouteWithLayout;
