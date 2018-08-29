import PropTypes from 'react-peek/prop-types';
import Badge from '../index';

Badge.propTypes = {
    className: PropTypes.string`
        Passes a custom className through to the component.
    `,
    onClick: PropTypes.func`
        Callback function triggered when user clicks on the button.
    `,
    quantity: PropTypes.any`
        Number of system notification for user.
    `,
    name: PropTypes.string.isRequired`
        Name of semantic-ui icon.
    `
};

export default Badge;
