import React from 'react';
import PropTypes from 'prop-types';
import BetItem from './betItem';

const BetsList = ({ list, isOrdnance }) => (
    <ul className="bets">
        {list.map((value, idx) => (
            <BetItem value={ value } key={ `bet-item-${idx}` } isOrdnance={ isOrdnance } />
        ))}
    </ul>
);

BetsList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
    isOrdnance: PropTypes.bool.isRequired
};

export default BetsList;
