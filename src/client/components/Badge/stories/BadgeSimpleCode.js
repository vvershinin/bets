import React from 'react';
import Badge from '../../Badge';

export const BadgeSimpleCode = () => (
    <Badge
        className={ 'some-class-name' }
        onClick={ () => { /** do something */ } }
        name={ 'user' }
    />
);

export default BadgeSimpleCode;
