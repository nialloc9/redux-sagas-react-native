import { USERS_FETCH_REQUESTED } from '../constants/users';

/** sends a request to the user fetch saga middleware to fetch the users */
export const fetch = () => ({ type: USERS_FETCH_REQUESTED });