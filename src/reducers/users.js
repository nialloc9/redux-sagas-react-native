import {
    USERS_FETCH_REQUESTED,
    USERS_FETCH_SUCCESS,
    USERS_FETCH_ERROR
} from '../constants/users';

const initialState = {
    loading: false,
    error: "",
    data: []
};

const users = (state = initialState, { type, payload }) => {

    switch(type) {
        case USERS_FETCH_REQUESTED:
            return {
                ...state,
                loading: true
            };
            break;

        case USERS_FETCH_SUCCESS:

            return {
                ...state,
                ...payload
            };
            break;

        case USERS_FETCH_ERROR:

            return {
                ...state,
                error: payload
            };
            break;
        default:
            return state;
    }
};

export default users;