import { fork } from 'redux-saga/effects';
import fetch from './users/fetch';
import fetchUser from './users/fetchUser';

export default function* root() {
    yield fork(fetch)
    yield fork(fetchUser)
}