import React from 'react';
import { action } from '@storybook/addon-actions';
import Lang from '../index';

export const LangSimpleExam = () => (
    <Lang
        lang={ 'ru' }
        changeLang={ action(' Change lang ') }
    />
);
