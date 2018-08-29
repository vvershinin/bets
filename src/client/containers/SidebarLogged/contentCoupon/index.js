import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import CouponList from './couponList';

import './index.scss';

const data = t => ([
    {
        label: t('coupon.always'),
        value: 'always'
    },
    {
        label: t('coupon.higher'),
        value: 'higher'
    },
    {
        label: t('coupon.any'),
        value: 'any'
    }
]);

const contentCoupon = ({ t, func, value, name }) => (
    <div className="couponPopUp">
        <div className="couponPopUpHeader">{t('coupon.header')}</div>
        <CouponList
            list={ data(t) }
            func={ func }
            value={ value }
            name={ name }
        />
    </div>
);

contentCoupon.propTypes = {
    t: PropTypes.func.isRequired,
    func: PropTypes.func.isRequired,
    value: PropTypes.string,
    name: PropTypes.string.isRequired
};

contentCoupon.defaultProps = {
    value: ''
};

export default translate(['sidebar'])(contentCoupon);
