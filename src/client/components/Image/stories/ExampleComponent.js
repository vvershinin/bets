import React from 'react';
import Image from '../../Image';
import { notificationImg } from '../../../assets/img';

const style = {
    width: 300,
    height: 200,
    position: 'relative',
    margin: '10px'
};

export const ImageSimple = () => (
    <div>
        <div style={ style }>
            <Image
                src={ notificationImg }
                className={ 'my-image' }
            />
        </div>
        <div style={ style }>
            <Image
                src={ '' }
                className={ 'my-image' }
            />
        </div>
    </div>
);

export default ImageSimple;
