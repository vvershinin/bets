import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';

const CouponItem = ({ item, func, key, value, name, ...props }) => (
    <li className="couponPopUpItem" key={ key }>
        <Checkbox
            radio
            label={ item.label }
            name={ name }
            value={ item.value }
            checked={ value === item.value }
            className="couponPopUpCheckbox"
            onChange={ func }
            { ...props }
        />
    </li>
);

CouponItem.propTypes = {
    item: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string
    }).isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    name: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    key: PropTypes.number.isRequired
};

export default CouponItem;
