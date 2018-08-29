import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { timezone } from './timezone';
import './sidebar.scss';

import Timer from './../../components/Timer';
import Badge from './../../components/Badge';
import ContentCoupon from './contentCoupon';
import Settings from './settingsSidebar';
import Notification from './notificationSidebar';
import UserMenu from './userMenu';
import MobileNavigation from './../../components/mobileNavigation';

import {
    lgScreenMin,
    TIME_ZONE_DELAY
} from '../../constants/application';

@translate(['common'])
class SidebarRight extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            settings: false,
            notifications: false,
            couponSettings: 'any'
        };
    }

    getDropdownValue = list => list.map((value, idx) => ({
        key: idx,
        value: `${value.name}---${value.gmt}---${value.offset}`,
        text: `${value.name} ${value.gmt}`
    }));

    handleSettings = () => {
        this.setState({
            settings: !this.state.settings
        });
    };

    handleNotification = () => {
        this.setState({
            notifications: !this.state.notifications
        });
    };

    handleCoupon = (e, value) => {
        this.setState({
            couponSettings: value.value
        });
    };

    render() {
        const {
            collapsedRight,
            toggleCollRight,
            className,
            changeTimeZone,
            timeZone,
            windowSize: {
                windowWidth
            },
            t
        } = this.props;

        const nameClass = classNames(className, {
            visible: collapsedRight
        });

        return (
            <div
                className={ nameClass }
            >
                { windowWidth > lgScreenMin ?
                    <div>
                        <Settings closeFunc={ this.handleSettings } visible={ this.state.settings } />
                        <Notification closeFunc={ this.handleNotification } visible={ this.state.notifications } />
                        <UserMenu
                            closeNotification={ this.handleNotification }
                            closeSettings={ this.handleSettings }
                            timer={
                                <Timer options={ {
                                    prefix: timeZone.prefix,
                                    offset: timeZone.offset,
                                    delay: TIME_ZONE_DELAY } }
                                />
                            }
                            timeValue={ timeZone }
                            timeOptions={ this.getDropdownValue(timezone) }
                            changeTimeZone={ changeTimeZone }
                            couponButton={
                                <Badge className="userCouponSettings" name={ 'setting' } onClick={ null } />
                            }
                            couponContent={
                                <ContentCoupon
                                    func={ this.handleCoupon }
                                    value={ this.state.couponSettings }
                                    name={ 'checkboxCoupon' }
                                /> }
                            toggleCollRight={ toggleCollRight }
                        />
                    </div>
                    :
                    <MobileNavigation
                        className={ 'logged' }
                        leftButton={
                            <div className="footerMobileNavItem">
                                <span className="footerMobileNavText">{ t('button.coupon') }</span>
                                <span className="footerMobileNavCount">{ '0' }</span>
                            </div>
                        }
                        leftTitle={ t('button.coupon') }
                        leftElement={ <div>Coupon</div> }
                        leftClass={ 'couponNav' }
                        rightButton={
                            <div className="footerMobileNavItem">
                                <span className="footerMobileNavText">{ t('button.myBets') }</span>
                                <span className="footerMobileNavCount">{ '0' }</span>
                            </div>
                        }
                        rightTitle={ t('button.myBets') }
                        rightElement={ <div> My Bets </div> }
                        rightClass={ 'registrationNav' }
                    />
                }
            </div>
        );
    }
}

SidebarRight.propTypes = {
    collapsedRight: PropTypes.bool.isRequired,
    toggleCollRight: PropTypes.func.isRequired
};

export default connect()(SidebarRight);
