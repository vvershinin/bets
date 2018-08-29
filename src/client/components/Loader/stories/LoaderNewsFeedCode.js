import React from 'react';
import Loader from '../../Loader';

export const LoaderSimple = () => (
    <Loader
        className={ 'topLoader loaderFeed' }
        text={ 'More News' }
        key={ 0 }
    />
);

export default LoaderSimple;
