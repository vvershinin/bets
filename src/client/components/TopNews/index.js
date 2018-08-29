import React from 'react';
import PropTypes from 'prop-types';
import TopNewsList from './TopNewsList';
import './index.scss';

const TopNews = ({ data, title }) => (
    <div className="topNewsBlock">
        <div className="topNewsHeader">{title}</div>
        <TopNewsList list={ data } />
    </div>
);

TopNews.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
};

export default TopNews;
