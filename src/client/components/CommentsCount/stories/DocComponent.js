import PropTypes from 'react-peek/prop-types';
import CommentCount from '../index';

CommentCount.displayName = 'Comment Count';

CommentCount.peek = {
    description: 'CommentCount component',
    categories: ['label', 'component']
};

CommentCount.propTypes = {
    count: PropTypes.number`Number of comments for selected article`
};

export default CommentCount;
