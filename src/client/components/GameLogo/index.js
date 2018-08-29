import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Image } from 'semantic-ui-react';
import {
    CSGOType,
    LolType,
    OverwatchType,
    DotaType,
    WotColorType,
    OverwatchColorType,
    DotaColorType,
    CSGOColorType,
    LolColorType
} from '../../assets/img';

import './index.scss';

const logo = {
    csgo: CSGOType,
    lol: LolType,
    overwatch: OverwatchType,
    dota: DotaType
};

const logoColor = {
    wot: WotColorType,
    csgo: CSGOColorType,
    overwatch: OverwatchColorType,
    dota: DotaColorType,
    lol: LolColorType
};

const GameLogo = ({ type, className, isColor }) => (
    <span className={ classNames(className, 'gameLabel', { gameLabelColor: isColor }) }>
        <Image
            src={ isColor ? logoColor[type] : logo[type] }
            className={ classNames('gameLabelImage', { gameLabelColorImage: isColor }) }
        />
    </span>
);

GameLogo.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string
};

GameLogo.defaultProps = {
    type: 'csgo',
    className: ''
};

export default GameLogo;
