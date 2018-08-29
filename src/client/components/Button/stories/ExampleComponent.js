import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../index';

export const WithTextButton = () => (
    <Button
        title={ 'foo bar baz' }
        onPress={ action('Hello world') }
    />
);

export default WithTextButton;
