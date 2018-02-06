import {
    PROFILE_FETCH_REQUESTED,
    PROFILE_FETCH_SUCCESS,
    PROFILE_FETCH_ERROR,
} from '../constants/profile';

const initialState = {
    loading: false,
    error: "",
    data: null
};

const profile = (state = initialState, { type, payload }) => {

    switch(type) {
        case PROFILE_FETCH_REQUESTED:
            return {
                ...state,
                loading: true
            };
            break;

        case PROFILE_FETCH_SUCCESS:

            return {
                ...state,
                ...payload,
                loading: false,
                error: ""
            };
            break;

        case PROFILE_FETCH_ERROR:

            return {
                ...state,
                error: payload,
                loading: false
            };
            break;
        default:
            return state;
    }
};

export default profile;