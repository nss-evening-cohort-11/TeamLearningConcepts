import axios from 'axios';
import {baseUrl} from './constants.json';

const getAllUsers = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Users`)
    .then(response => resolve(response.data))
    .catch(reject);
});


// change to ${userId}
const getUserByEmail = (email) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Users/${email}/authedUser`)
  .then(response => resolve(response.data))
  .catch(reject)
})

export default {getAllUsers, getUserByEmail};

