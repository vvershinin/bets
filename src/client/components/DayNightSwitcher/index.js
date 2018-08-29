import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import {
    dayIcon,
    nightIcon
} from './../../assets/img';

import './index.scss';

const DayNightSwitcher = ({ changeTheme }) => (
    <div className="dayNightSwitcher">
        <input
            id="dayNightSwitcherCheckbox"
            type="checkbox"
            className="dayNightSwitcherCheckbox hidden"
            onChange={ changeTheme }
            readOnly
            tabIndex="0"
        />
        <label htmlFor="dayNightSwitcherCheckbox" className="dayNightSwitcherLabel">
            <Image src={ dayIcon } className="dayNightSwitcherImg dayNightSwitcherImgDay" />
            <Image src={ nightIcon } className="dayNightSwitcherImg dayNightSwitcherImgNight" />
        </label>
    </div>
);

DayNightSwitcher.propTypes = {
    changeTheme: PropTypes.func.isRequired
};

export default DayNightSwitcher;
