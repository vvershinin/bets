import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import Cookies from 'js-cookie';
import i18next from 'i18next';
import {
    Sidebar
} from 'semantic-ui-react';
import classNames from 'classnames';

import './layout.scss';

import SidebarLeft from '../SidebarLogged/SidebarLeft';
import SidebarLogged from '../SidebarLogged';
import SidebarUnLogged from '../SidebarUnlogged';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
    changeTimeZone,
    changeLang,
    toggleCollapsedLeft,
    toggleCollapsedRight,
    toggleAll
} from '../../actions/page';

import WindowResizeListenerHOC from '../../components/WindowResize/windowResizeHOC';

@translate(['common'])
class Layout extends Component {
    state = {
        isSticked: false
    };

    handleContextRef = contextRef => this.setState({ contextRef });

    handleContentRef = contentRef => this.setState({ contentRef });

    onChangeLang = (lang) => {
        const {
            changeLanguage
        } = this.props;

        const event = new Event('language');

        // set language to redux store
        changeLanguage && changeLanguage({ lang });

        // change language
        i18next.changeLanguage(lang);

        // set language to cookies
        Cookies.set('i18next', lang);

        window && window.dispatchEvent(event);
    };

    handleStick = () => {
        !this.state.isSticked && this.setState({
            isSticked: true
        });
    };

    handleUnStick = () => {
        this.state.isSticked && this.setState({
            isSticked: false
        });
    };

    render() {
        const {
            children,
            page,
            toggleCollLeft,
            toggleCollRight,
            changeTZ,
            isLoggedIn,
            windowSize
        } = this.props;

        const { contextRef } = this.state;

        return (
            <div className="page" id="page" ref={ this.handleContextRef }>
                <Sidebar.Pushable>
                    <SidebarLeft
                        collapsedLeft={ page.collapsedLeft }
                        toggleCollLeft={ toggleCollLeft }
                        changeLang={ this.onChangeLang }
                    />
                    <Sidebar.Pusher>
                        <div className="content" key={ 'header-key-0' }>
                            <Header
                                toggleCollapsedLeft={ toggleCollLeft }
                                toggleCollapsedRight={ toggleCollRight }
                                changeTheme={ this.changeTheme }
                                contextRef={ contextRef }
                                onStick={ this.handleStick }
                                onUnstick={ this.handleUnStick }
                            />
                            <div
                                className={ classNames('main-content', { isSticked: this.state.isSticked }) }
                                id="main-content"
                                ref={ this.handleContentRef }
                                key={ 'main-content-key-0' }
                            >
                                <div className="main-content__center">
                                    {children}
                                </div>
                            </div>
                        </div>
                        {isLoggedIn() ?
                            <SidebarLogged
                                className={ 'sidebar sidebar--right sidebar--logged' }
                                collapsedRight={ page.collapsedRight }
                                toggleCollRight={ toggleCollRight }
                                changeTimeZone={ changeTZ }
                                timeZone={ page.timeZone }
                                windowSize={ windowSize }
                            /> :
                            <SidebarUnLogged
                                className={ 'sidebar sidebar--right sidebar--unlogged' }
                                windowSize={ windowSize }
                            />
                        }
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
                <Footer />
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.object.isRequired,
    page: PropTypes.shape({
        view: PropTypes.string,
        collapsedLeft: PropTypes.bool,
        collapsedRight: PropTypes.bool,
        height: PropTypes.number
    }).isRequired,
    toggleCollLeft: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    page: state.page
});

const mapDispatchToProps = dispatch => ({
    changeTZ: (prefix, offset) => dispatch(changeTimeZone({ offset, prefix })),
    changeLanguage: ({ lang }) => dispatch(changeLang({ lang })),
    toggleCollLeft: () => dispatch(toggleCollapsedLeft()),
    toggleCollRight: () => dispatch(toggleCollapsedRight()),
    toggleAll: (width, height) => dispatch(toggleAll(width, height))
});

export default connect(mapStateToProps, mapDispatchToProps)(WindowResizeListenerHOC(Layout));

