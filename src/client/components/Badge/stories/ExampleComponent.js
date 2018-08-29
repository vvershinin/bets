import React from 'react';
import { action } from '@storybook/addon-actions';
import Badge from '../index';

export const BadgeSimpleExam = () => (
    <Badge
        className={ 'some-class-name' }
        onClick={ action('click on badge') }
        name={ 'user' }
    />
);

export const BadgeWithTextExam = () => (
    <Badge
        className={ 'some-class-name' }
        quantity={ 5 }
        onClick={ action('click on badge') }
        name={ 'user' }
    />
);
