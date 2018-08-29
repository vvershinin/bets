import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import classNames from 'classnames';

import './index.scss';

const Badge = ({ className, quantity, name, size, onClick }) => (
    <span onClick={ onClick } className={ classNames('badge', className) }>
        <Icon
            className="badgeIcon"
            name={ name }
            size={ size || 'large' }
        />
        {quantity && <span className={ 'badgeNumber' }>{quantity}</span>}
    </span>
);

Badge.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    quantity: PropTypes.any,
    name: PropTypes.string.isRequired
};

Badge.defaultProps = {
    quantity: false,
    onClick: null,
    className: ''
};

export default Badge;

