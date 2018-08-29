import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Embed, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import GameLogo from './../GameLogo';
import Image from './../Image';
import CommentsCount from './../CommentsCount';
import { getParameterByName } from '../../utils/textFormatter';

const TopNewsItem = ({
    image,
    shortDesc,
    commentCount,
    href,
    showVideo,
    video,
    gameType,
    date,
    key
}) => (
    <div className="topNews" key={ key }>
        <Link to={ href } className="topNewsImageWrap">
            {image ? <Image src={ image } className={ 'topNewsImage' } /> : <div className="topNewsImage" /> }
        </Link>
        {showVideo && <Modal
            mountNode={ document.getElementById('page') }
            trigger={
                <Icon name="video play" className="topNewsVideo" />
            }
        >
            <Embed id={ getParameterByName('v', video.video_link) } source={ video.video_type } active={ true } />
        </Modal> }
        <GameLogo type={ gameType } className={ 'topNewsGameLogo' } />
        <div className="topNewsWrap">
            <div className="topNewsMeta">
                <CommentsCount count={ commentCount } className={ 'topNewsComments' } />
                <div className="topNewsDate">{ date }</div>
            </div>
            <Link to={ href }>
                <div
                    className="topNewsShortText"
                    contentEditable="false"
                    dangerouslySetInnerHTML={ { __html: shortDesc } }
                />
            </Link>
        </div>
    </div>
);

TopNewsItem.propTypes = {
    image: PropTypes.string,
    shortDesc: PropTypes.string,
    commentCount: PropTypes.number,
    href: PropTypes.string.isRequired,
    video: PropTypes.shape({
        video_link: PropTypes.string,
        video_type: PropTypes.string
    }),
    showVideo: PropTypes.bool.isRequired,
    gameType: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired
};

TopNewsItem.defaultProps = {
    image: null,
    shortDesc: '',
    commentCount: 0,
    video: {
        video_type: '',
        video_link: ''
    }
};

export default TopNewsItem;
