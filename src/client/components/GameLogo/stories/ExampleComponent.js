import React from 'react';
import GameLogo, { GameLogoColor } from '../index';

const style = {
    position: 'relative',
    width: 50,
    height: 50,
    margin: '0 0 10px 10px',
    float: 'left'
};

export const GameLogoWithType = () => (
    <div style={ { position: 'relative' } }>
        <div style={ style }>
            <GameLogo
                type={ 'lol' }
            />
        </div>
        <div style={ style }>
            <GameLogo
                type={ 'overwatch' }
            />
        </div>
        <div style={ style }>
            <GameLogo
                type={ 'csgo' }
            />
        </div>
    </div>
);

export const GameLogoColorWithType = () => (
    <div style={ { position: 'relative' } }>
        <div style={ style }>
            <GameLogoColor
                type={ 'wot' }
            />
        </div>
        <div style={ style }>
            <GameLogoColor
                type={ 'overwatch' }
            />
        </div>
    </div>
);

export default GameLogoWithType;
