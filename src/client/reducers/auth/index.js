import * as constants from '../../constants/actions/api';

const initialState = {
    loading: false,
    isLoggedIn: false
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case constants.API_AUTH_UI_LOGIN.INIT :
            return {
                ...state,
                ...action.payload
            };
        case constants.API_AUTH_UI_LOGIN.SUCCESS :
            return {
                ...state,
                ...action.payload
            };
        case constants.API_AUTH_UI_LOGIN.FAILURE :
            return {
                ...state,
                ...action.payload
            };
        case constants.API_AUTH_UI_SIGNUP.INIT :
            return {
                ...state,
                ...action.payload
            };
        case constants.API_AUTH_UI_SIGNUP.SUCCESS :
            return {
                ...state,
                ...action.payload
            };
        case constants.API_AUTH_UI_SIGNUP.FAILURE :
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export default reducer;
