import { failureAction } from '../../utils/factories';

import {
    API_AUTH_UI_LOGIN,
    API_AUTH_UI_SIGNUP,
    API_AUTH_UI
} from '../../constants/actions/api';

export const login = {
    init: ({ username, password }) => ({
        type: API_AUTH_UI_LOGIN.INIT,
        payload: {
            username,
            password
        }
    }),
    success: (request, response) => ({
        type: API_AUTH_UI_LOGIN.SUCCESS, // eslint-disable-line
        payload: {
            ...response.data
        }
    }),
    error: error => failureAction(API_AUTH_UI_LOGIN, error)
};

export const signUp = {
    init: ({ email, password, name, surname, language, username, currency }) => ({
        type: API_AUTH_UI_SIGNUP.INIT,
        payload: { email, password, name, surname, language, username, currency }
    }),
    success: (request, response) => ({
        type: API_AUTH_UI_SIGNUP.SUCCESS, // eslint-disable-line
        payload: {
            ...response.data
        }
    }),
    error: error => failureAction(API_AUTH_UI_SIGNUP, error)

};

export const failure = res => ({
    type: API_AUTH_UI.FAILURE,
    payload: {
        ...res
    }
});
