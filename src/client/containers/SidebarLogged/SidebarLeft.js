import React from 'react';
import PropTypes from 'prop-types';
import {
    Sidebar,
    Menu
} from 'semantic-ui-react';

import NavMenu from './navigationMenu';

import './sidebar.scss';

const SidebarLeft = ({ collapsedLeft, toggleCollLeft, className, changeLang }) => (
    <Sidebar
        as={ Menu }
        animation="overlay"
        width="wide"
        visible={ collapsedLeft }
        className={ `${className}` }
        icon="labeled"
        vertical
    >
        <NavMenu closeFunc={ toggleCollLeft } changeLang={ changeLang } />
    </Sidebar>
);

SidebarLeft.propTypes = {
    collapsedLeft: PropTypes.bool.isRequired,
    toggleCollLeft: PropTypes.func.isRequired
};

export default SidebarLeft;
