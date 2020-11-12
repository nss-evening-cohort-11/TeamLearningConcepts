import axios from 'axios';

import {baseUrl} from './constants.json';

const putCompletedInvoice = (completedInvoice) => 
    axios.put(`${baseUrl}/invoices/complete`, completedInvoice);


const getInvoiceByUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/invoices/user/${userId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

export default { getInvoiceByUserId, putCompletedInvoice };
