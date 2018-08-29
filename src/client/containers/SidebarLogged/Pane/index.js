import React from 'react';
import {
    Dropdown,
    Button
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import BetsList from './betsList';
import './index.scss';

const ExpressPane = ({ isOrdnance, bets, t, data }) => (
    <div className="userBetsPane userBetsPane--expressPane">
        <BetsList list={ data } isOrdnance={ isOrdnance } />
        <div className="userBetsPaneFooter">
            <div className="userBetsCautions">
                <div className="cautions">
                    <div className="cautionsHeader">{ t('pane.cautions') }</div>
                    <div className="cautionsText">
                        { t('pane.cautionsText') }
                    </div>
                    <div className="cautionsBtns">
                        <Button className="btn active" content={ t('button.yes') } />
                        <Button className="btn" content={ t('button.no') } />
                    </div>
                </div>
            </div>
            <div className="userBetsPaneWrap">
                { !isOrdnance && (
                    <div>
                        <div className="sumBet">
                            <Dropdown
                                className="sumBetInput"
                                options={ bets }
                                placeholder={ '$ 500' }
                                selection
                                value={ '' }
                                onChange={ () => {} }
                            />
                            <span className="sumBetLabel">{t('pane.sum')}</span>
                        </div>
                        <div className="sumKoef">
                            <span className="sumKoefValue">x{'2.10'}</span>
                            <span className="sumKoefLabel">{t('pane.sumRate')}</span>
                        </div>
                    </div>
                )}
                <div className="possibleGain">
                    <span className="possibleGainValue">${'12 000'}</span>
                    <span className="possibleGainLabel">{t('pane.possibleGain')}</span>
                </div>
            </div>
            <Button className="placeBet btn btnFullWidth" content={ t('button.placeBet') } />
        </div>
    </div>
);

ExpressPane.propTypes = {
    isOrdnance: PropTypes.bool,
    bets: PropTypes.arrayOf(PropTypes.object),
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    t: PropTypes.func.isRequired
};

ExpressPane.defaultProps = {
    isOrdnance: false,
    bets: [{}]
};

export default translate(['sidebar'])(ExpressPane);

