import React from 'react';
import PropTypes from 'prop-types';
import CouponItem from './couponItem';

const CouponList = ({ list, func, value, name, ...props }) => (
    <ul className="couponPopUpList">
        {list.map((item, idx) => (
            <CouponItem
                item={ item }
                key={ `coupon-item-${idx}` }
                func={ func }
                value={ value }
                name={ name }
                { ...props }
            />
        ))}
    </ul>
);

CouponItem.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    name: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default CouponList;
