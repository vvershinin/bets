import React from 'react';
import Badge from '../../Badge';

export const BadgeWithTextCode = () => (
    <Badge
        className={ 'some-class-name' }
        quantity={ 5 }
        onClick={ () => { /** do something */ } }
        name={ 'user' }
    />
);

export default BadgeWithTextCode;
