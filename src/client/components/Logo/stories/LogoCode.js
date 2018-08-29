import React from 'react';
import Logo from '../../Logo';

export const LogoSimpleCode = () => (
    <Logo
        className={ 'some-class-name' }
        onClick={ () => { /** do something */ } }
        name={ 'user' }
    />
);

export default LogoSimpleCode;
