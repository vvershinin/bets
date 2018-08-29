import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { translate } from 'react-i18next';
import NewsFeedList from './newsFeedList';

import './index.scss';

const NewsList = ({ data, t, className }) => (
    <div className={ classNames('newsList', className) }>
        <h4 className="newsListTitle">{ t('newsFeed') }</h4>
        <NewsFeedList data={ data } t={ t } />
    </div>
);

NewsList.propTypes = {
    t: PropTypes.func.isRequired,
    className: PropTypes.string,
    data: PropTypes.array.isRequired
};

NewsList.defaultProps = {
    className: ''
};

export default translate(['common'])(NewsList);
