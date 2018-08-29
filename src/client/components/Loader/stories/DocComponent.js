import PropTypes from 'react-peek/prop-types';
import Loader from '../index';

Loader.displayName = 'Loader component';

Loader.peek = {
    description: 'Loader component for infinite scroller component.',
    categories: ['component']
};

Loader.propTypes = {
    text: PropTypes.string`Text into loader component.`,
    className: PropTypes.string`Passes a custom className through to the component.`
};

export default Loader;
