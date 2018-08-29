import React from 'react';
import Timer from '../../Timer';
import { TIME_ZONE_DELAY, TIME_ZONE_OFFSET, TIME_ZONE } from '../../../constants/application';

export const TimerSimpleCode = () => (
    <Timer options={ {
        prefix: TIME_ZONE,
        offset: TIME_ZONE_OFFSET,
        delay: TIME_ZONE_DELAY } }
    />
);

export default TimerSimpleCode;
