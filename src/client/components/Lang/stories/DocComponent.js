import PropTypes from 'react-peek/prop-types';
import Lang from '../index';

Lang.propTypes = {
    lang: PropTypes.string`
        Set default language to dropdown.
    `,
    changeLang: PropTypes.func.isRequired`
        Callback function triggered when user change language.
    `
};

export default Lang;
