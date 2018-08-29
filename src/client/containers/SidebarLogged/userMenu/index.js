import React from 'react';
import {
    Dropdown,
    Popup,
    Tab,
    Label,
    Menu,
    Button
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';

import { HipsterManinShades } from '../../../components/Icons';
import Badge from '../../../components/Badge';
import Pane from './../Pane';

import { dataPane, betsSelect } from '../mockData';

import './index.scss';

const panes = t => ([
    {
        menuItem: <Menu.Item key="ordnance">{t('pane.ordnance')}<Label>2</Label></Menu.Item>,
        render: () => <Tab.Pane attached={ false } >{ <Pane isOrdnance={ true } data={ dataPane } /> }</Tab.Pane>
    },
    {
        menuItem: <Menu.Item key="express">{t('pane.express')}<Label>2</Label></Menu.Item>,
        render: () => <Tab.Pane attached={ false } >{ <Pane bets={ betsSelect } data={ dataPane } /> }</Tab.Pane>
    }
]);

const UserMenu = ({
    closeNotification,
    closeSettings,
    timer,
    timeOptions,
    changeTimeZone,
    couponButton,
    couponContent,
    toggleCollRight,
    t
}) => (
    <div className="userMenu">
        <div className="userInfo">
            <div className="userInfoBar">
                <Dropdown
                    className="userInfoTimeZone"
                    trigger={ timer }
                    options={ timeOptions }
                    scrolling
                    onChange={ (e, { value }) => {
                        const array = value.split('---');
                        changeTimeZone(array[1], array[2]);
                    } }
                />
                <Badge
                    className="userInfoNotification"
                    name={ 'mail' }
                    quantity={ 5 }
                    url={ '/mailbox' }
                    onClick={ closeNotification }
                />
                <Badge
                    className="userInfoSettings"
                    name={ 'setting' }
                    url={ '/settings' }
                    onClick={ closeSettings }
                />
                <Button
                    className="nav-toggle active userInfoCloseBtn"
                    onClick={ toggleCollRight }
                ><i /></Button>
            </div>
            <div className="userProfile">
                <HipsterManinShades className="userProfileImage" />
                <div className="userProfileWrapp">
                    <div className="userProfileName">{ 'Vitaliy Zamedyanskiy' }</div>
                    <div className="userProfileEmail">{ 'zamedyanskiy@gmail.com' }</div>
                </div>
            </div>
            <div className="userBalance">
                <div className="userBalanceLabel">{t('common.balance')}</div>
                <div className="userBalanceAmount">{'$ 500.50'}</div>
            </div>
            <div className="userButton">
                <Link
                    to={ t('path.cashbox') }
                    className="ui userButtonCashbox btn"
                >{ t('button.cashbox') }</Link>
                <Link
                    to={ t('path.myBets') }
                    className="ui userButtonBets btn"
                >{ t('button.myBets') }</Link>
            </div>
        </div>
        <div className="userCoupon">
            <div className="userCouponLabel">{ t('common.coupon')}</div>
            <Badge
                className="userCouponTrash"
                name={ 'trash' }
                onClick={ closeNotification }
            />
            <Popup
                trigger={ couponButton }
                content={ couponContent }
                on="click"
                position={ 'bottom right' }
                horizontalOffset={ 10 }
                hideOnScroll
            />
        </div>
        <div className="userBets">
            <Tab
                menu={ { secondary: true, pointing: true } }
                panes={ panes(t) }
            />
        </div>
    </div>
);

export default translate(['sidebar'])(UserMenu);
