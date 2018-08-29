import {
    GET_POST_DETAILS,
    GET_POST_COMMENTS,
    GET_NEWSFEED,
    GET_POST_BY_PARAMS,
    GET_TOP_NEWS,
    GET_TOP_3_NEWS,
    RESET_NEWS_DATA
} from '../../constants/actions/posts';

function reducer(state = { loading: true }, action) {
    let stack;

    switch (action.type) {
        case RESET_NEWS_DATA:
            return {
                ...state,
                ...{
                    all: {
                        data: []
                    },
                    top: {
                        data: []
                    }
                }
            };
        case GET_NEWSFEED.INIT:
            return {
                ...state,
                loading: true
            };
        case GET_NEWSFEED.FAILURE:
            return {
                ...state,
                loading: false
            };
        case GET_NEWSFEED.SUCCESS:
            stack = state.all ? state.all.data : []; // eslint-disable-line

            return {
                ...state,
                loading: false,
                ...{
                    all: {
                        data: stack.concat(action.payload.data),
                        /**
                         *
                         * nextPageData: {
                         *  x-wp-total -  the total number of records in the collection
                         *  x-wp-totalpages - the total number of pages encompassing all available records
                         * }
                         *
                         */
                        nextPageData: action.payload.headers
                    }
                }
            };
        case GET_POST_BY_PARAMS.INIT:
            return {
                ...state,
                loading: true
            };
        case GET_POST_BY_PARAMS.FAILURE:
            return {
                ...state,
                loading: false
            };
        case GET_POST_BY_PARAMS.SUCCESS:
            stack = state.param ? state.param.data : []; // eslint-disable-line

            return {
                ...state,
                loading: false,
                ...{
                    param: {
                        data: stack.concat(action.payload.data),
                        /**
                         *
                         * nextPageData: {
                         *  x-wp-total -  the total number of records in the collection
                         *  x-wp-totalpages - the total number of pages encompassing all available records
                         * }
                         *
                         */
                        nextPageData: action.payload.headers
                    }
                }
            };
        case GET_TOP_NEWS.INIT:
            return {
                ...state,
                loading: false
            };
        case GET_TOP_NEWS.FAILURE:
            return {
                ...state,
                loading: false
            };
        case GET_TOP_NEWS.SUCCESS:
            // if language are changed, we shouldn't concat existing data
            stack = state.top ? state.top.data : []; // eslint-disable-line
            stack = stack
                .concat(action.payload.data)
                .sort((a, b) => parseInt(a.views, 10) - parseInt(b.views, 10))
                .reverse();

            return {
                ...state,
                loading: false,
                ...{
                    top: {
                        data: stack,
                        /**
                         *
                         * nextPageData: {
                         *  x-wp-total -  the total number of records in the collection
                         *  x-wp-totalpages - the total number of pages encompassing all available records
                         * }
                         *
                         */
                        nextPageData: action.payload.headers
                    }
                }
            };
        case GET_TOP_3_NEWS.INIT:
            return {
                ...state,
                loading: false
            };
        case GET_TOP_3_NEWS.FAILURE:
            return {
                ...state,
                loading: false
            };
        case GET_TOP_3_NEWS.SUCCESS:
            return {
                ...state,
                loading: false,
                ...{
                    top3: {
                        data: action.payload.data,
                        /**
                         *
                         * nextPageData: {
                         *  x-wp-total -  the total number of records in the collection
                         *  x-wp-totalpages - the total number of pages encompassing all available records
                         * }
                         *
                         */
                        nextPageData: action.payload.headers
                    }
                }
            };
        case GET_POST_DETAILS.SUCCESS:
            return {
                ...state,
                ...{
                    details: action.payload
                }
            };
        case GET_POST_COMMENTS.SUCCESS:
            return {
                ...state,
                ...{
                    comments: action.payload
                }
            };
        default:
            return state;
    }
}

export default reducer;
