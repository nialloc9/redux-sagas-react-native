import { call, put, takeEvery } from 'redux-saga/effects';
import fetchUser from '../../../api/users/fetchUser';
import {
    PROFILE_FETCH_REQUESTED,
    PROFILE_FETCH_SUCCESS,
    PROFILE_FETCH_ERROR
} from '../../../constants/profile';

/**
 * fetches user from the api endpoint
 * @param type
 * @param payload
 */
function* fetch({ type, payload }) {

    const { id } = payload;

    try {
        const { data } = yield call(fetchUser, id);

        yield put({type: PROFILE_FETCH_SUCCESS, payload: {
            data
        }});

    } catch ({ message }) {
        put({type: PROFILE_FETCH_ERROR, payload: {
            error: message
        }})
    }
}

/* take latest will only allow a single call to be made. Concurrent calls are stopped by only using the latest call. */
function* fetchUserSaga() {
    yield takeEvery(PROFILE_FETCH_REQUESTED, fetch);
}

export default fetchUserSaga;