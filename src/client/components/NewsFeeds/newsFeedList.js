import React from 'react';
import PropTypes from 'prop-types';
import NewsFeedItem from './newsFeedItem';
import utils from '../../utils';

const NewsFeedList = ({ data, t }) => (
    <div className="newsListWrap">
        {
            data.map((value, idx) => (
                <NewsFeedItem
                    key={ `news-feed-${idx}` }
                    gameType={ value.game_name }
                    shortDesc={ utils.text.cut(97, value.excerpt.rendered) }
                    commentCount={ value.comment_count }
                    id={ value.id }
                    href={ t('path.details').replace(':id', value.id) }
                    date={ utils.time.formatDate(
                        value.modified,
                        t('months', { returnObjects: true }))
                    }
                />
            ))
        }
    </div>
);

NewsFeedList.propTypes = {
    data: PropTypes.array.isRequired,
    t: PropTypes.func.isRequired
};

NewsFeedList.defaultProps = {};

export default NewsFeedList;
