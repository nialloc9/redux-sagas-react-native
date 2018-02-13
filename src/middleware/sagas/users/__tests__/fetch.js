import { call, put } from 'redux-saga/effects';
import fetch from '../../../../api/users/fetch';
import { USERS_FETCH_SUCCESS } from '../../../../constants/users';
import { fetchUsers } from '../fetch';

describe("fetch test suite", () => {

    it('must call fetch', () => {

        const generator = fetchUsers({ type: "test", payload: {} });

        const testValue = generator.next().value;

        expect(testValue).toEqual(call(fetch))

        expect(generator.next().value)
            .toEqual(put({ type: USERS_FETCH_SUCCESS }));

        expect(generator.next())
            .toEqual({ done: true, value: undefined });
    });
});