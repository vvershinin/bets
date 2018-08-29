import { takeEvery, put, call } from 'redux-saga/effects';

import * as services from '../../services';
import * as actions from '../../actions';
import * as constants from '../../constants/actions/posts';

const eventsOptions = {
    [constants.GET_NEWSFEED.INIT]: {
        api: services.posts.getNewsfeed,
        action: actions.posts.getNewsfeed
    },
    [constants.GET_TOP_NEWS.INIT]: {
        api: services.posts.getTopNews,
        action: actions.posts.getTopNews
    },
    [constants.GET_POST_DETAILS.INIT]: {
        api: services.posts.getPostDetails,
        action: actions.posts.getPostDetails
    },
    [constants.GET_POST_COMMENTS.INIT]: {
        api: services.posts.getPostComments,
        action: actions.posts.getPostComments
    },
    [constants.GET_TOP_3_NEWS.INIT]: {
        api: services.posts.getTop3News,
        action: actions.posts.getTop3News
    },
    [constants.GET_POST_BY_PARAMS.INIT]: {
        api: services.posts.getPostByParam,
        action: actions.posts.getPostByParams
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
