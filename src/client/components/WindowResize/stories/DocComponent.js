import PropTypes from 'react-peek/prop-types';
import WindowResize from '../../WindowResize';

WindowResize.displayName = 'WindowResize component';

WindowResize.peek = {
    description: 'Route component to which the wrapper component is transferred. In our case, this is a Layout component',
    categories: ['route', 'component']
};

WindowResize.propTypes = {
    onResize: PropTypes.func.isRequired``,
    debounceTime: PropTypes.number``
};

export default WindowResize;
