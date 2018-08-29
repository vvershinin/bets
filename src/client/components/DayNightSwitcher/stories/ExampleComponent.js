import React from 'react';
import { action } from '@storybook/addon-actions';
import DNS from '../index';

export const DNSSimpleExam = () => (
    <DNS
        changeTheme={ action(' change theme ') }
    />
);
