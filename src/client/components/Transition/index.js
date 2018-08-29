import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'semantic-ui-react';

const TransitionWrap = ({
    isVisible,
    animation,
    duration,
    children
}) => (
    <Transition
        visible={ isVisible }
        animation={ animation }
        duration={ duration }
    >
        { children }
    </Transition>
);

TransitionWrap.propTypes = {
    isVisible: PropTypes.bool,
    animation: PropTypes.string,
    duration: PropTypes.number
};

TransitionWrap.defaultProps = {
    isVisible: false,
    animation: 'slide left',
    duration: 500
};

export default TransitionWrap;
