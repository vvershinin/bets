import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import { Transition } from 'semantic-ui-react';
import NotificationList from './notificationList';
import { dataNotification } from '../mockData';

import './index.scss';

const NotificationSidebar = ({ closeFunc, visible, animation, duration, t }) => (
    <Transition visible={ visible } animation={ animation } duration={ duration }>
        <div className="notifications">
            <div className="notificationsLabel">
                {t('common.notification')}
                <span
                    className="notificationsCloseBtn BtnClose"
                    onClick={ closeFunc }
                />
            </div>
            <NotificationList list={ dataNotification } t={ t } />
        </div>
    </Transition>
);

NotificationSidebar.propTypes = {
    closeFunc: PropTypes.func.isRequired,
    visible: PropTypes.bool,
    animation: PropTypes.string,
    duration: PropTypes.number,
    t: PropTypes.func.isRequired
};

NotificationSidebar.defaultProps = {
    visible: false,
    animation: 'slide left',
    duration: 500
};

export default translate(['sidebar'])(NotificationSidebar);
