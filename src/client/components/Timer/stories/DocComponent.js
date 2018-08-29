import PropTypes from 'react-peek/prop-types';
import Timer from '../index';


Timer.propTypes = {
    options: PropTypes.shape({
        prefix: PropTypes.string,
        offset: PropTypes.number,
        delay: PropTypes.number
    }).isRequired`
        Setup options for timer components
    `
};

export default Timer;
