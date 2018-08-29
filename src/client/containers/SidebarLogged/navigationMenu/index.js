import React from 'react';
import {
    Transition,
    Button
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';

import './index.scss';


import {
    RingBell,
    CasinoChips,
    OnAirMenu,
    RefillIcon,
    LotteryIcon,
    SupportIcon,
    BonusIcon,
    ChatIcon,
    AboutIcon,
    WheelFortune
} from '../../../components/Icons/navigationMenuIcon';

import Logo from '../../../components/Logo';
import Lang from '../../../components/Lang';

const navigationMenu = ({
    closeFunc,
    visible,
    changeLang,
    animation = 'slide left',
    duration = 500,
    t
}) => (
    <Transition visible={ visible } animation={ animation } duration={ duration }>
        <div className="navigation">
            <div className="navigationWrap">
                <Button
                    className="nav-toggle active"
                    onClick={ closeFunc }
                ><i /></Button>
                <Logo url={ t('path.home') } />
                <Lang changeLang={ changeLang } />
            </div>

            <ul className="navigationList">
                <li className="navigationItem">
                    <RingBell className="navigationIcon" />
                    <Link to={ t('path.home') } className="navigationLink link">{t('nav.home')}</Link>
                </li>
                <li className="navigationItem">
                    <CasinoChips className="navigationIcon" />
                    <Link to={ t('path.news') } className="navigationLink link">{t('nav.news')}</Link>
                </li>
                <li className="navigationItem">
                    <WheelFortune className="navigationIcon" />
                    <Link to={ t('path.wheel') } className="navigationLink link">{t('nav.wheel')}</Link>
                </li>

                <li className="navigationItem">
                    <OnAirMenu className="navigationIcon" />
                    <Link to={ t('path.live') } className="navigationLink link">{t('nav.live')}</Link>
                </li>
                <li className="navigationItem">
                    <RefillIcon className="navigationIcon" />
                    <Link to={ t('path.cashbox') } className="navigationLink link">{t('nav.cashbox')}</Link>
                </li>
                <li className="navigationItem">
                    <BonusIcon className="navigationIcon" />
                    <Link to={ t('path.bonus') } className="navigationLink link">{t('nav.bonus')}</Link>
                </li>
                <li className="navigationItem">
                    <LotteryIcon className="navigationIcon" />
                    <Link to={ t('path.lottery') } className="navigationLink link">{t('nav.lottery')}</Link>
                </li>
                <li className="navigationItem">
                    <ChatIcon className="navigationIcon" />
                    <Link to={ t('path.chat') } className="navigationLink link">{t('nav.chat')}</Link>
                </li>
                <li className="navigationItem">
                    <SupportIcon className="navigationIcon" />
                    <Link to={ t('path.support') } className="navigationLink link">{t('nav.support')}</Link>
                </li>
                <li className="navigationItem">
                    <AboutIcon className="navigationIcon" />
                    <Link to={ t('path.about') } className="navigationLink link">{t('nav.about')}</Link>
                </li>
            </ul>
        </div>
    </Transition>
);

export default translate(['common'])(navigationMenu);
