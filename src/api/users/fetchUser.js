import axios from 'axios';

/**
 * fetches a user from the server using id to identify
 * @param id {int} - the id of the user requested
 */
const fetchUser = id =>  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`, {});

export default fetchUser;