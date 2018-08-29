import {
    CHANGE_LANG,
    CHANGE_TIME_ZONE,
    COLLAPSE_CHANGE_LEFT,
    COLLAPSE_CHANGE_RIGHT,
    TOGGLE_ALL
} from '../../constants/actions/page';

export const toggleCollapsedRight = () => ({
    type: COLLAPSE_CHANGE_RIGHT
});

export const toggleCollapsedLeft = () => ({
    type: COLLAPSE_CHANGE_LEFT
});

export const toggleAll = (width, height) => ({
    type: TOGGLE_ALL,
    payload: {
        height,
        width
    }
});

export const changeTimeZone = ({ offset, prefix }) => ({
    type: CHANGE_TIME_ZONE,
    payload: {
        offset,
        prefix
    }
});

export const changeLang = ({ lang }) => ({
    type: CHANGE_LANG,
    payload: {
        lang
    }
});
