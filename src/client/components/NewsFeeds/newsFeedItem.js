import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CommentsCount from '../CommentsCount';
import GameLogo from '../GameLogo';

const NewsFeedItem = ({
    gameType,
    shortDesc,
    commentCount,
    date,
    href
}) => (
    <div className="news">
        <GameLogo className="newsImage" type={ gameType } isColor={ true } />
        <div className="newsMeta">
            <CommentsCount count={ commentCount } className={ 'newsIcon' } />
            <span className="newsDate">{ date }</span>
        </div>
        <Link to={ href }>
            <div
                className="newsShortDesc"
                contentEditable="false"
                dangerouslySetInnerHTML={ { __html: shortDesc } }
            />
        </Link>
    </div>
);

NewsFeedItem.propTypes = {
    gameType: PropTypes.string,
    shortDesc: PropTypes.string.isRequired,
    commentCount: PropTypes.string,
    date: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
};

NewsFeedItem.defaultProps = {
    gameType: '',
    commentCount: 0
};

export default NewsFeedItem;
