import React from 'react';
import classNames from 'classnames';
import {
    SOCIAL_DATA
} from '../../constants/social';

import SocialLinksList from './SocialLinksList';

import './index.scss';

const SocialLinks = ({ type, className }) => (
    <SocialLinksList
        className={ classNames(
            className,
            {
                horizontal: type === 'horizontal',
                vertical: type === 'vertical'
            }) }
        data={ SOCIAL_DATA }
    />
);

SocialLinks.defatulProps = {
    classNames: '',
    type: 'vertical'
};

export default SocialLinks;
