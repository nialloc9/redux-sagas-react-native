import { call, put, takeLatest } from 'redux-saga/effects';
import fetch from '../../../api/users/fetch';
import {
    USERS_FETCH_REQUESTED,
    USERS_FETCH_SUCCESS,
    USERS_FETCH_ERROR
} from '../../../constants/users';

/**
 * fetches all users from the api endpoint
 * @param type
 * @param payload
 */
function* fetchUsers({ type, payload }) {
    try {
        const users = yield call(fetch);

        yield put({type: USERS_FETCH_SUCCESS, payload: users});

    } catch ({ message }) {
        put({type: USERS_FETCH_ERROR, payload: {
            error: message
        }})
    }
}

/* take latest will only allow a single call to be made. Concurrent calls are stopped by only using the latest call. */
function* fetchUsersSaga() {
    yield takeLatest(USERS_FETCH_REQUESTED, fetchUsers);
}

export default fetchUsersSaga;