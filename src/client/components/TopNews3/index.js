import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { translate } from 'react-i18next';
import PostForTopNews from './postForTopNews';
import utils from '../../utils/';
import './index.scss';

const TopNews3 = ({ data, isDetailsPage, t }) => (
    <div className={ classNames('top3News', { detailsPage: isDetailsPage }) }>
        <div className="row">
            <div className={ `col-md-12 ${isDetailsPage ? '' : 'col-xl-8'}` }>
                { data[0] && <PostForTopNews
                    className={ 'top3NewsMain' }
                    image={ data[0].featured_media_link }
                    shortDesc={ utils.text.cut(75, data[0].excerpt.rendered) }
                    commentCount={ data[0].comment_count }
                    id={ data[0].id }
                    href={ t('path.details').replace(':id', data[0].id) }
                    gameType={ data[0].game_name }
                    isDetailsPage={ isDetailsPage }
                    showVideo={ data[0].video_type && data[0].video_link }
                    video={ {
                        video_type: data[0].video_type,
                        video_link: data[0].video_link
                    } }
                    date={ utils.time.formatDate(
                        data[0].modified,
                        t('months', { returnObjects: true }))
                    }
                /> }
            </div>
            { !isDetailsPage &&
                <div className="col-xl-4 column-between-col">
                    { data[1] && <PostForTopNews
                        className={ 'top3NewsSub' }
                        image={ data[1].featured_media_link }
                        shortDesc={ utils.text.cut(35, data[1].excerpt.rendered) }
                        commentCount={ data[1].comment_count }
                        id={ data[1].id }
                        href={ t('path.details').replace(':id', data[1].id) }
                        gameType={ data[1].game_name }
                        isDetailsPage={ false }
                        showVideo={ data[1].video_type && data[1].video_link }
                        video={ {
                            video_type: data[1].video_type,
                            video_link: data[1].video_link
                        } }
                    /> }
                    { data[2] && <PostForTopNews
                        className={ 'top3NewsSub' }
                        image={ data[2].featured_media_link }
                        shortDesc={ utils.text.cut(35, data[2].excerpt.rendered) }
                        commentCount={ data[2].comment_count }
                        id={ data[2].id }
                        gameType={ data[2].game_name }
                        isDetailsPage={ false }
                        href={ t('path.details').replace(':id', data[2].id) }
                        showVideo={ data[2].video_type && data[2].video_link }
                        video={ {
                            video_type: data[2].video_type,
                            video_link: data[2].video_link
                        } }
                    /> }
                </div>
            }
        </div>
    </div>
);

TopNews3.propTypes = {
    data: PropTypes.array.isRequired,
    isDetailsPage: PropTypes.bool,
    t: PropTypes.func.isRequired
};

TopNews3.defaultProps = {
    isDetailsPage: false
};

export default translate(['common'])(TopNews3);
