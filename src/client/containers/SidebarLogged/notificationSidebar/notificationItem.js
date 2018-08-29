import React from 'react';
import PropTypes from 'prop-types';
import { Image, Button } from 'semantic-ui-react';

const NotificationItem = ({ item, t, key }) => (
    <li className="notificationsItem" key={ key }>
        <div className="notification">
            <Image src={ item.img } className="notificationImage" />
            <div className="notificationWrap">
                <p className="notificationText">
                    { item.text }
                </p>
                <Button
                    className="notificationBtn btn btnFullWidth "
                    content={ t('button.active') }
                />
            </div>
        </div>
    </li>
);

NotificationItem.propTypes = {
    item: PropTypes.objectOf({
        img: PropTypes.string,
        text: PropTypes.string
    }).isRequired,
    key: PropTypes.number.isRequired,
    t: PropTypes.func.isRequired
};

export default NotificationItem;
