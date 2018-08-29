import {
    TOGGLE_ALL,
    COLLAPSE_CHANGE_LEFT,
    COLLAPSE_CHANGE_RIGHT,
    CHANGE_TIME_ZONE,
    CHANGE_LANG
} from '../../constants/actions/page';

import {
    TIME_ZONE,
    TIME_ZONE_OFFSET
} from '../../constants/application';

const initialState = {
    collapsedLeft: false,
    collapsedRight: false,
    view: 'DesktopView',
    timeZone: {
        prefix: TIME_ZONE,
        offset: TIME_ZONE_OFFSET
    }
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_ALL:
            return {
                ...state,
                ...action.payload
            };
        case COLLAPSE_CHANGE_LEFT:
            return {
                ...state,
                collapsedLeft: !state.collapsedLeft
            };
        case COLLAPSE_CHANGE_RIGHT:
            return {
                ...state,
                collapsedRight: !state.collapsedRight
            };
        case CHANGE_TIME_ZONE:
            return {
                ...state,
                timeZone: action.payload
            };
        case CHANGE_LANG:
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
}

export default reducer;
