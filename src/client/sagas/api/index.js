import { takeEvery, put, call } from 'redux-saga/effects';

import * as services from '../../services';
import * as actions from '../../actions';
import * as constants from '../../constants/actions/api';

const eventsOptions = {
    [constants.API_AUTH_UI_LOGIN.INIT]: {
        api: services.auth.login,
        action: actions.auth.login
    },
    [constants.API_AUTH_UI_SIGNUP.INIT]: {
        api: services.auth.signUp,
        action: actions.auth.signUp
    }
};

const events = Object.keys(eventsOptions);

function* apiGenerator(action) {
    const eventOptions = eventsOptions[action.type];

    try {
        const request = action.payload;
        const response = yield call(eventOptions.api, request);

        yield put(eventOptions.action.success(request, response));
        return ({ action, errors: false });
    } catch (error) {
        yield put(eventOptions.action.error(error));
        return ({ action, error, errors: true });
    }
}

export default function* apiSaga() {
    yield takeEvery(events, apiGenerator);
}
