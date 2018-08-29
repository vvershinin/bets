import React from 'react';
import Timer from '../index';
import { TIME_ZONE, TIME_ZONE_OFFSET, TIME_ZONE_DELAY } from '../../../constants/application';

export const TimerSimpleExam = () => (
    <Timer options={ {
        prefix: TIME_ZONE,
        offset: TIME_ZONE_OFFSET,
        delay: TIME_ZONE_DELAY } }
    />
);
