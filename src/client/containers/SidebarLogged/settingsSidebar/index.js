import React from 'react';
import { Transition } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';

import './index.scss';

import {
    UserIcon,
    RefillIcon,
    WithdrawalIcon,
    HistoryIcon,
    BetsListIcon,
    SecurityIcon,
    DrawingsIcon,
    NotificationsIcon,
    SingOutIcon
} from '../../../components/Icons/navigationMenuIcon';

const SettingsSidebar = ({ closeFunc, visible, animation, duration, t }) => (
    <Transition visible={ visible } animation={ animation } duration={ duration }>
        <div className="settings">
            <div className="settingsLabel">
                {t('common.settings')}
                <span
                    className="notificationsCloseBtn BtnClose"
                    onClick={ closeFunc }
                />
            </div>
            <ul className="settingsList">
                <li className="settingsItem">
                    <UserIcon className="settingsIcon" />
                    <Link to={ t('path.profile') } className="settingsLink link">{t('link.profile')}</Link>
                </li>
                <li className="settingsItem">
                    <RefillIcon className="settingsIcon" />
                    <Link to={ t('path.refill') } className="settingsLink link">{t('link.refill')}</Link>
                </li>
                <li className="settingsItem">
                    <WithdrawalIcon className="settingsIcon" />
                    <Link to={ t('path.withdrawal') } className="settingsLink link">{t('link.withdrawal')}</Link>
                </li>
                <li className="settingsItem">
                    <HistoryIcon className="settingsIcon" />
                    <Link to={ t('path.history') } className="settingsLink link">{t('link.history')}</Link>
                </li>
                <li className="settingsItem">
                    <BetsListIcon className="settingsIcon" />
                    <Link to={ t('path.betsList') } className="settingsLink link">{t('link.betsList')}</Link>
                </li>
                <li className="settingsItem">
                    <DrawingsIcon className="settingsIcon" />
                    <Link to={ t('path.drawings') } className="settingsLink link">{t('link.drawings')}</Link>
                </li>
                <li className="settingsItem">
                    <SecurityIcon className="settingsIcon" />
                    <Link to={ t('path.security') } className="settingsLink link">{t('link.security')}</Link>
                </li>
                <li className="settingsItem">
                    <NotificationsIcon className="settingsIcon" />
                    <Link to={ t('path.notifications') } className="settingsLink link"> {t('link.notifications')}</Link>
                </li>
                <li className="settingsItem">
                    <SingOutIcon className="settingsIcon" />
                    <Link to={ t('path.exit') } className="settingsLink link">{t('link.exit')}</Link>
                </li>
            </ul>
        </div>
    </Transition>
);

SettingsSidebar.propTypes = {
    closeFunc: PropTypes.func.isRequired,
    visible: PropTypes.bool,
    animation: PropTypes.string,
    duration: PropTypes.number,
    t: PropTypes.func.isRequired
};

SettingsSidebar.defaultProps = {
    visible: false,
    animation: 'slide left',
    duration: 500
};

export default translate(['sidebar'])(SettingsSidebar);
