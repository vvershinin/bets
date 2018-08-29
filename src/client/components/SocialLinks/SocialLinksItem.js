import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from 'semantic-ui-react';

const SocialLinksItem = ({ url, name }) => (
    <a
        className={ classNames('social-icon', name) }
        href={ url }
        target="_blank"
        rel="noreferrer noopener"
    >
        <Icon name={ name } />
    </a>
);

SocialLinksItem.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

SocialLinksItem.defaultProps = {};

export default SocialLinksItem;
