import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';
import { List } from 'semantic-ui-react';

import {
    IconVisa,
    IconMasterCard,
    IconQiwi,
    IconWebMoney,
    IconUnion,
    IconYandex
} from '../../components/Icons/';
import * as image from '../../assets/img';

import { ButtonIcon } from '../Button';
import './footer.scss';
import SocialLinks from '../SocialLinks';

const Footer = ({ t }) => (
    <footer id="footer" className="footer">
        <div className="footer__wrapper">
            <div className="links">
                <div className="links__items links__items--nav-links">
                    <List
                        link
                        className="nav-link"
                    >
                        <List.Item className="nav-link__item">
                            <Link to={ t('path.game') }>{ t('footer.link.game') }</Link>
                        </List.Item>
                        <List.Item className="nav-link__item">
                            <Link to={ t('path.live') }>{ t('footer.link.live') }</Link>
                        </List.Item>
                        <List.Item className="nav-link__item">
                            <Link to={ t('path.bonus') }>{ t('footer.link.bonus') }</Link>
                        </List.Item>
                        <List.Item className="nav-link__item">
                            <Link to={ t('path.lottery') }>{ t('footer.link.lottery') }</Link>
                        </List.Item>
                        <List.Item className="nav-link__item">
                            <Link to={ t('path.news') }>{ t('footer.link.news') }</Link>
                        </List.Item>
                        <List.Item className="nav-link__item">
                            <Link to={ t('path.chat') }>{ t('footer.link.chat') }</Link>
                        </List.Item>
                        <List.Item className="nav-link__item">
                            <Link to={ t('path.payments') }>{ t('footer.link.payments') }</Link>
                        </List.Item>
                    </List>

                    <List
                        link
                        className="nav-link "
                    >
                        <List.Item className="nav-link__item">
                            <Link to={ t('path.reg') }>{ t('footer.link.reg') }</Link>
                        </List.Item>
                        <List.Item className="nav-link__item">
                            <Link to={ t('path.term') }>{ t('footer.link.term') }</Link>
                        </List.Item>
                        <List.Item className="nav-link__item">
                            <Link to={ t('path.privacy') }>{ t('footer.link.privacy') }</Link>
                        </List.Item>
                        <List.Item className="nav-link__item">
                            <Link to={ t('path.support') }>{ t('footer.link.support') }</Link>
                        </List.Item>
                        <List.Item className="nav-link__item">
                            <Link to={ t('path.partnership') }>{ t('footer.link.partnership') }</Link>
                        </List.Item>
                        <List.Item className="nav-link__item">
                            <Link to={ t('path.about') }>{ t('footer.link.about') }</Link>
                        </List.Item>
                        <List.Item className="nav-link__item">
                            <Link to={ t('path.contact') }>{ t('footer.link.contacts') }</Link>
                        </List.Item>
                    </List>
                </div>
                <div className="links__items links__items--support-btn">
                    <ButtonIcon
                        imageUrl={ image.supportBtn }
                        content={ t('footer.button') }
                        className="btnSupport"
                    />
                    <br />
                    <div className="socialIcons">
                        <SocialLinks type={ 'horizontal' } />
                    </div>
                </div>
            </div>
            <div className="footer__payment-icon">
                <List horizontal className="payment-icon">
                    <List.Item className="payment-icon__item">
                        <IconVisa className="payment-img payment-img--visa" />
                    </List.Item>
                    <List.Item className="payment-icon__item">
                        <IconMasterCard className="payment-img payment-img--mastercard" />
                    </List.Item>
                    <List.Item className="payment-icon__item">
                        <IconUnion className="payment-img payment-img--union-pay" />
                    </List.Item>
                    <List.Item className="payment-icon__item">
                        <IconYandex className="payment-img payment-img--yandex" />
                    </List.Item>
                    <List.Item className="payment-icon__item">
                        <IconQiwi className="payment-img payment-img--qiwi" />
                    </List.Item>
                    <List.Item className="payment-icon__item">
                        <IconWebMoney className="payment-img payment-img--webmoney" />
                    </List.Item>
                </List>
            </div>
            <div className="footer__copyright">
                <p className="copyright">
                    {t('footer.copyright')}
                </p>
            </div>
        </div>
    </footer>);

Footer.propTypes = {
    t: PropTypes.func.isRequired
};

export default translate(['common'])(Footer);

