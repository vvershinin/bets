import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.scss';
import IconComment from './../Icons/IconComment';

const CommentCount = ({ count, className }) => (
    <span className={ classNames(className, 'commentCount') }>
        <IconComment className="commentCountIcon" />
        <span className="commentCountNumber">{ count }</span>
    </span>
);

CommentCount.propTypes = {
    count: PropTypes.number,
    className: PropTypes.string
};

CommentCount.defaultProps = {
    count: 0,
    className: ''
};

export default CommentCount;
