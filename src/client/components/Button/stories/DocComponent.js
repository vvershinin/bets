import PropTypes from 'react-peek/prop-types';
import Button from '../index';

Button.displayName = 'Button';

Button.peek = {
    description: 'Button component',
    categories: ['controls', 'button']
};

Button.propTypes = {
    title: PropTypes.string.isRequired`Content for button.`,
    onPress: PropTypes.func.isRequired`Callback function triggered when user clicks on the button.`
};

export default Button;
