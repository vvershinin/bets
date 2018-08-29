import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import { SITE_NAME } from '../../constants/application';
import { IconLogo } from '../Icons';
import './logo.scss';

const Logo = ({ url }) => (
    <Link to={ url } className="logo">
        <IconLogo className="logoImage" />
    </Link>
);

Logo.propTypes = {
    url: PropTypes.string.isRequired
};

export default Logo;
