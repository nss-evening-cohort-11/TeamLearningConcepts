import axios from 'axios';

import {baseUrl} from './constants.json';

const getInvoiceByInvoiceId = (invoiceId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/invoices/${invoiceId}`)
    .then(response => {
      if (response.data !== "") {
        response.data.taxes = response.data.taxes.toFixed(2)
        response.data.subtotal = response.data.subtotal.toFixed(2)
        response.data.invoiceTotal = response.data.invoiceTotal.toFixed(2)
      }
      resolve(response.data)})
    .catch(reject)
})

const getInvoiceByUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/invoices/user/${userId}`)
    .then(response => {
      if (response.data !== "") {
        response.data.taxes = response.data.taxes.toFixed(2)
        response.data.subtotal = response.data.subtotal.toFixed(2)
        response.data.invoiceTotal = response.data.invoiceTotal.toFixed(2)
      }
      resolve(response.data)})
    .catch(reject);
});

const deleteInvoiceAndLineItems = (invoiceId) => axios.delete(`${baseUrl}/invoices/delete/${invoiceId}`);

const addInvoice = (userCourse) => axios.post(`${baseUrl}/invoices`, userCourse);

const putCompletedInvoice = (completedInvoice) => 
    axios.put(`${baseUrl}/invoices/complete`, completedInvoice);


export default { 
  getInvoiceByInvoiceId,
  getInvoiceByUserId, 
  addInvoice, 
  putCompletedInvoice,
  deleteInvoiceAndLineItems
};
