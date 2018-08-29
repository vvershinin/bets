import React from 'react';
import PropTypes from 'prop-types';
import {
    Tab,
    Menu
} from 'semantic-ui-react';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import './sidebar.scss';

import { lgScreenMin } from '../../constants/application';
import Login from '../Login';
import MobileNavigation from '../../components/mobileNavigation';

@translate(['common'])
class SidebarUnlogged extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    getLogin = type => <Login type={ type } />;

    getPanes = t => ([
        {
            menuItem: <Menu.Item key="express">{ t('button.login') }</Menu.Item>,
            render: () => <Tab.Pane attached={ false } >{ this.getLogin('login') }</Tab.Pane>
        },
        {
            menuItem: <Menu.Item key="ordnance">{ t('button.registration') }</Menu.Item>,
            render: () => <Tab.Pane attached={ false } >{ this.getLogin('registration') }</Tab.Pane>
        }
    ]);

    render() {
        const {
            className,
            windowSize: {
                windowWidth
            },
            t
        } = this.props;

        return (
            <div className={ className }>
                { windowWidth > lgScreenMin ?
                    <Tab
                        className={ 'tabs' }
                        menu={ { secondary: true, pointing: true } }
                        panes={ this.getPanes(t) }
                    /> :
                    <MobileNavigation
                        className={ 'unlogged' }
                        leftButton={
                            <span className="footerMobileNavText">{ t('button.login') }</span>
                        }
                        leftTitle={ t('button.login') }
                        leftElement={ this.getLogin() }
                        leftClass={ 'logInNav' }
                        rightButton={
                            <span className="footerMobileNavText">{ t('button.registration') }</span>
                        }
                        rightTitle={ t('button.registration') }
                        rightElement={ this.getLogin() }
                        rightClass={ 'registrationNav' }
                    />
                }
            </div>
        );
    }
}

SidebarUnlogged.propTypes = {
    className: PropTypes.string
};

SidebarUnlogged.defaultProps = {
    className: ''
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(SidebarUnlogged);
