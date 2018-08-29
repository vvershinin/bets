import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SocialLinksItem from './SocialLinksItem';

const SocialLinksList = ({ data, className }) => (
    <div className={ classNames('social-icons', className) }>
        {
            data.map((value, idx) =>
                (<SocialLinksItem
                    key={ `social-links-${idx}` }
                    url={ value.url }
                    name={ value.name }
                />)
            )
        }
    </div>
);

SocialLinksList.propTypes = {
    className: PropTypes.string,
    data: PropTypes.array.isRequired
};

SocialLinksList.defaultProps = {
    className: ''
};

export default SocialLinksList;
