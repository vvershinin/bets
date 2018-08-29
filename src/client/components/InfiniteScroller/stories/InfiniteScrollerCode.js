import React from 'react';
import Infinite from '../../InfiniteScroller';

export const InfiniteSimple = () => (
    <Infinite
        pageStart={ 0 }
        loadMore={ () => { /* load more data function */ } }
        loader={ <div /> }
        useWindow={ true }
        hasMore={ true }
    >
        { /* components */ }
    </Infinite>
);

export default InfiniteSimple;
