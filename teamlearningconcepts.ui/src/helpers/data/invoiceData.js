import axios from 'axios';
import {baseUrl} from './constants.json';

const getInvoiceByUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/invoices/user/${userId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

export default { getInvoiceByUserId };
