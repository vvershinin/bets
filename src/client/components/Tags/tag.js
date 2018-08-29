import React from 'react';
import PropTypes from 'prop-types';


const Tag = ({ name }) => (
    <div className="detailsTag">
        { name }
    </div>
);

Tag.propTypes = {
    name: PropTypes.string.isRequired
};

export default Tag;
