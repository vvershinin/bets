import { all, call } from 'redux-saga/effects';

import api from './api';
import post from './posts';


const sagas = [
    api,
    post
];

export default function* root() {
    yield all(sagas.map(saga => call(saga)));
}
