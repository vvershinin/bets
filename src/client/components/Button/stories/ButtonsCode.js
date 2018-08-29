import React from 'react';
import Button from '../../Button';

export const WithTextButton = () => (
    <Button
        title={ 'foo bar baz' }
        onPress={ () => { /** do something */ } }
    />
);

export default WithTextButton;
