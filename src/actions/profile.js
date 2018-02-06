import { PROFILE_FETCH_REQUESTED } from '../constants/profile';

/**
 * sends a request to the profile fetch saga middleware to fetch the profile
 * @param id {int} - the id of the user requested
 */
export const fetch = id => ({ type: PROFILE_FETCH_REQUESTED, payload: { id } });