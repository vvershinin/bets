import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './notificationItem';

const NotificationList = ({ list, t }) => (
    <ul className="notificationsList">
        {list.map((item, idx) => (
            <NotificationItem item={ item } key={ `notification-item-${idx}` } t={ t } />
        ))}
    </ul>
);

NotificationList.propTypes = {
    list: PropTypes.objectOf({
        img: PropTypes.string,
        text: PropTypes.string
    }).isRequired,
    t: PropTypes.func.isRequired
};

export default NotificationList;
