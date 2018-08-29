import PropTypes from 'react-peek/prop-types';
import Image from '../index';

Image.displayName = 'Image simple';

Image.peek = {
    description: 'Image component for show image with preload.',
    categories: ['image', 'component']
};

Image.propTypes = {
    src: PropTypes.string.isRequired`Passes a image's path through to the component.`,
    className: PropTypes.string`Passes a custom className through to the component.`
};

export default Image;
