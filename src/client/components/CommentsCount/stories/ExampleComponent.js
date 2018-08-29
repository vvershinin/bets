import React from 'react';
import CommentCount from '../index';

export const CommentCountWithNum = () => (
    <div style={ { position: 'relative' } }>
        <CommentCount
            count={ 5 }
        />
    </div>

);

export default CommentCountWithNum;
