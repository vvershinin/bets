import { failureAction } from '../../utils/factories';

import {
    GET_POST_DETAILS,
    GET_POST_COMMENTS,
    GET_TOP_NEWS,
    GET_TOP_3_NEWS,
    GET_NEWSFEED,
    GET_POST_BY_PARAMS,
    RESET_NEWS_DATA
} from '../../constants/actions/posts';

export const resetNewsData = () => ({
    type: RESET_NEWS_DATA
});

export const getTopNews = {
    init: ({ lang, page }) => ({
        type: GET_TOP_NEWS.INIT,
        payload: { lang, page }
    }),
    success: (request, response) => ({
        type: GET_TOP_NEWS.SUCCESS, // eslint-disable-line
        payload: {
            data: response.data,
            headers: response.headers
        }
    }),
    error: error => failureAction(GET_TOP_NEWS, error)
};

export const getNewsfeed = {
    init: ({ lang, page, perPage }) => ({
        type: GET_NEWSFEED.INIT,
        payload: { lang, page, perPage }
    }),
    success: (request, response) => ({
        type: GET_NEWSFEED.SUCCESS, // eslint-disable-line
        payload: {
            data: response.data,
            headers: response.headers
        }
    }),
    error: error => failureAction(GET_NEWSFEED, error)
};

export const getTop3News = {
    init: ({ lang, page }) => ({
        type: GET_TOP_3_NEWS.INIT,
        payload: { lang, page }
    }),
    success: (request, response) => ({
        type: GET_TOP_3_NEWS.SUCCESS, // eslint-disable-line
        payload: {
            data: response.data,
            headers: response.headers
        }
    }),
    error: error => failureAction(GET_TOP_3_NEWS, error)
};

export const getPostByParams = {
    init: ({ lang, params }) => ({
        type: GET_POST_BY_PARAMS.INIT,
        payload: { lang, params }
    }),
    success: (request, response) => ({
        type: GET_POST_BY_PARAMS.SUCCESS, // eslint-disable-line
        payload: {
            data: response.data,
            headers: response.headers
        }
    }),
    error: error => failureAction(GET_POST_BY_PARAMS, error)
};

export const getPostDetails = {
    init: ({ lang, id }) => ({
        type: GET_POST_DETAILS.INIT,
        payload: { lang, id }
    }),
    success: (request, response) => ({
        type: GET_POST_DETAILS.SUCCESS, // eslint-disable-line
        payload: {
            data: response.data
        }
    }),
    error: error => failureAction(GET_POST_DETAILS, error)
};

export const getPostComments = {
    init: ({ lang, id }) => ({
        type: GET_POST_COMMENTS.INIT,
        payload: { lang, id }
    }),
    success: (request, response) => ({
        type: GET_POST_COMMENTS.SUCCESS, // eslint-disable-line
        payload: {
            data: response.data
        }
    }),
    error: error => failureAction(GET_POST_COMMENTS, error)
};
