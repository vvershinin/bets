import PropTypes from 'react-peek/prop-types';
import { GameLogoColor } from '../index';

GameLogoColor.displayName = 'GameLogoColor component. Available types: ‘overwatch’, ‘wot’';
GameLogoColor.propTypes = {
    type: PropTypes.string.isRequired`Special name of game, which we should show on label.`
};

export default GameLogoColor;
