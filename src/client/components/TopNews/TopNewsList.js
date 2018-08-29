import React from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import TopNewsItem from './TopNewsItem';
import utils from '../../utils';


const TopNewsList = ({ list, t }) =>
    (
        <div className="topNewsList">
            <div className="row">
                {list.map(item => (
                    <div className="col-xl-6 col-lg-12">
                        <TopNewsItem
                            image={ item.featured_media_link }
                            shortDesc={ utils.text.cut(97, item.excerpt.rendered) }
                            commentCount={ item.comment_count }
                            id={ item.id }
                            href={ t('path.details').replace(':id', item.id) }
                            gameType={ item.game_name }
                            showVideo={ item.video_type && item.video_link }
                            video={ {
                                video_type: item.video_type,
                                video_link: item.video_link
                            } }
                            key={ `top-news-item-${item.id}` }
                            date={ utils.time.formatDate(
                                item.modified,
                                t('months', { returnObjects: true }))
                            }
                        />
                    </div>
                ))}
            </div>
        </div>
    );

TopNewsItem.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    t: PropTypes.func.isRequired
};

export default translate(['common'])(TopNewsList);

