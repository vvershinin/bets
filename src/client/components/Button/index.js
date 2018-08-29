import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon, Image, Button } from 'semantic-ui-react';

export const Btn = props => (
    <Button { ...props } />
);

export const ButtonIcon = ({ onClick, content, imageUrl, iconName, className }) => (
    <Button
        onClick={ onClick }
        className={ classNames('btn', className) }
    >
        {iconName && <Icon name={ iconName } className="btnIcon" />}
        {imageUrl && <Image src={ imageUrl } className="btnIcon" />}
        {content}
    </Button>
);

ButtonIcon.propTypes = {
    onClick: PropTypes.func,
    content: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    iconName: PropTypes.string
};

ButtonIcon.defaultProps = {
    onClick: null,
    imageUrl: null,
    iconName: null
};

export default Btn;
