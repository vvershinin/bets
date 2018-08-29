import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Modal, Embed, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Image from './../Image';
import CommentCount from './../CommentsCount';
import GameLogo from './../GameLogo';
import { getParameterByName } from '../../utils/textFormatter';

const PostForTopNews = ({
    className,
    image,
    shortDesc,
    commentCount,
    id,
    href,
    gameType,
    showVideo,
    video,
    isDetailsPage,
    date
}) => (
    <div className={ classNames(className, { detailsPage: isDetailsPage }) } key={ `post-item-${id}` }>
        {image && <Image src={ image } className={ `${className}Image` } /> }
        {
            !isDetailsPage && showVideo &&
                <Modal
                    mountNode={ document.getElementById('page') }
                    trigger={
                        <Icon name="video play" className={ `${className}Video` } />
                    }
                >
                    <Embed id={ getParameterByName('v', video.video_link) } source={ video.video_type } active={ true } />
                </Modal>
        }
        <GameLogo type={ gameType } />
        {
            isDetailsPage ?
                <div className={ `${className}WrapMeta` }>
                    <div className={ `${className}Date` }>{ date }</div>
                    <div
                        className={ `${className}Title` }
                        contentEditable="false"
                        dangerouslySetInnerHTML={ { __html: shortDesc } }
                    />
                </div>
                :
                <Link to={ href } className={ `${className}WrapMeta` }>
                    <div
                        className={ `${className}Title` }
                        contentEditable="false"
                        dangerouslySetInnerHTML={ { __html: shortDesc } }
                    />
                </Link>
        }
        <CommentCount count={ commentCount } />
    </div>
);

PostForTopNews.propTypes = {
    href: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    image: PropTypes.string,
    shortDesc: PropTypes.string,
    commentCount: PropTypes.string,
    id: PropTypes.string.isRequired,
    isDetailsPage: PropTypes.bool.isRequired,
    gameType: PropTypes.string.isRequired,
    showVideo: PropTypes.bool.isRequired,
    video: PropTypes.shape({
        video_link: PropTypes.string,
        video_type: PropTypes.string
    }),
    date: PropTypes.string
};

PostForTopNews.defaultProps = {
    image: null,
    shortDesc: '',
    commentCount: 0,
    video: {
        video_type: '',
        video_link: ''
    },
    date: ''
};

export default PostForTopNews;
