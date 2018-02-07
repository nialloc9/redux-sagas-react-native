import fetchMock from 'fetch-mock';
import { call } from 'redux-saga/effects';
import fetch from '../../../../api/users/fetch';
import { fetchUsers } from '../fetch';

describe("fetch test suite", () => {

    afterEach(() => {
        fetchMock.restore();
        fetchMock.config.overwriteRoutes = true;
    });

    it('must call fetch', () => {

        fetchMock.mock("*", {});

        const generator = fetchUsers({ type: "test", payload: {} });

        const testValue = generator.next().value;

        expect(testValue).toEqual(call(fetch))
    });
});