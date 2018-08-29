import PropTypes from 'react-peek/prop-types';
import GameLogo from '../index';

GameLogo.displayName = 'GameLogo component';
GameLogo.peek = {
    description: "GameLogo component. Available types: 'lol', 'overwatch', 'csgo'",
    categories: ['label', 'component']
};
GameLogo.propTypes = {
    type: PropTypes.string.isRequired`Name of game, which we should show on label.`
};

export default GameLogo;
