import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from 'semantic-ui-react';

import './index.scss';

const Loader = ({ text, className }) =>
    (<div className={ classNames(className, 'loader') } >
        <Icon name="sync alternate" className="loaderIcon" />
        <span className="loaderText">{text}</span>
    </div>);

Loader.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string
};

Loader.defaultProps = {
    text: '',
    className: ''
};

export default Loader;
