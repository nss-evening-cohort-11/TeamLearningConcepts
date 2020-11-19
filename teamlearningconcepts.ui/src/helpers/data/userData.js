import axios from 'axios';
import {baseUrl} from './constants.json';

const getAllUsers = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Users`)
    .then(response => resolve(response.data))
    .catch(reject);
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAllUsers };
