import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Image, Input } from 'semantic-ui-react';

import { OnAir } from '../../../components/Icons';

const BetItem = ({ value, isOrdnance }) => (
    <li className="betsItem">
        <div className="bet">
            <Icon className="betRemove" name="remove circle" />
            <div className="betMatchName">{value.matchName}</div>
            <div className="betWrap">
                <div className="betTeamInfo">
                    <Image src={ value.logo } className="betTeamLogo" />
                    <div className="betTeamWrap">
                        <div className="betTeamName">{ value.name }</div>
                        {value.isWin && <div className="betTeamIsWinner">{'Winner'}</div>}
                    </div>
                </div>
                <div className="betInfo">
                    {value.isAir && <OnAir className="betInfoOnAir" />}
                    { !isOrdnance && (<div className="betInfoKoef">{value.rate}</div>) }
                </div>
            </div>
            { isOrdnance && (
                <div className="betProfit">
                    <Input
                        className="betProfitInput"
                        value={ `${value.currency} ${value.inputValue}` }
                    />
                    <div className="betProfitKoef">x {value.rateAll} = </div>
                    <div className="betProfitResult">{ value.profit }</div>
                </div>)}
        </div>
    </li>
);

BetItem.propTypes = {
    value: PropTypes.arrayOf(PropTypes.object).isRequired,
    isOrdnance: PropTypes.bool.isRequired
};

export default BetItem;
