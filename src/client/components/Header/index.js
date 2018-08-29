import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { translate } from 'react-i18next';
import classNames from 'classnames';
import { Sticky } from 'semantic-ui-react';
import {
    Btn
} from '../Button';

import {
    IconHome,
    IconNews,
    IconWheel
} from '../Icons';


import Logo from '../Logo';
import './header.scss';

const Header = (props) => {
    const {
        t,
        toggleCollapsedLeft,
        userAmount,
        contextRef,
        onStick,
        onUnstick
    } = props;

    return (
        <Sticky
            onStick={ onStick }
            onUnstick={ onUnstick }
            context={ contextRef }
            className="headerWrapper"
            key={ 'header-key-0' }
        >
            <header className="header" id="header" key={ 'header-key-1' } >
                <div className="header__tooggle hidden-lg">
                    <Btn
                        onClick={ toggleCollapsedLeft }
                        className="nav-toggle"
                    ><i /></Btn>
                </div>
                <div className="header__logo">
                    <Logo className="logo" url={ t('path.home') } />
                </div>
                <div className="header__user-amount hidden-lg">{ userAmount || '$ 10 500.50' }</div>
                <div className="header__cashbox hidden-lg">
                    <Link
                        to={ t('path.cashbox') }
                        className="ui userButtonCashbox btn btnSm active"
                    >{ t('button.cashbox') }</Link>
                </div>
                <div className="header__nav hidden-sm visible-lg">
                    <nav className="nav">
                        <NavLink
                            exact
                            className={ classNames('nav__item') }
                            activeClassName="active"
                            to={ t('path.home') }
                        >
                            <IconHome className="nav__img" />
                            <span>{t('nav.home') }</span>
                        </NavLink>
                        <NavLink
                            className={ classNames('nav__item') }
                            activeClassName="active"
                            to={ t('path.news') }
                        >
                            <IconNews className="nav__img" />
                            <span>{t('nav.news') }</span>
                        </NavLink>
                        <NavLink
                            className={ classNames('nav__item') }
                            activeClassName="active"
                            to={ t('path.wheel') }
                        >
                            <IconWheel className="nav__img" />
                            <span>{t('nav.wheel') }</span>
                        </NavLink>
                    </nav>
                </div>
            </header>
        </Sticky>
    );
};

Header.propTypes = {
    t: PropTypes.func.isRequired,
    toggleCollapsedLeft: PropTypes.func
};

Header.defaultProps = {
    toggleCollapsedLeft: () => {}
};

export default translate(['common'])(Header);

