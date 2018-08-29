import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postsReducer from './posts';
import authReducer from './auth';
import pageReducer from './page';
import envReducer from './env';

const rootReducer = combineReducers({
    posts: postsReducer,
    auth: authReducer,
    page: pageReducer,
    env: envReducer,
    form: formReducer
});

export default rootReducer;
