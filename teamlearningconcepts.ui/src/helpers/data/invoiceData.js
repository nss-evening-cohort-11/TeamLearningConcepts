import axios from 'axios';
import {baseUrl} from './constants.json';

const getInvoiceByUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/invoices/user/${userId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const addInvoice = (userCourse) => axios.post(`${baseUrl}/invoices`, userCourse);

export default { getInvoiceByUserId, addInvoice };
