import axios from 'axios';

import {baseUrl} from './constants.json';

const getPaymentTypeById = (paymentTypeId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/paymentTypes/${paymentTypeId}`)
    .then(response => resolve(response.data))
    .catch(reject)
}) 

const getPaymentTypesByUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/paymentTypes/user/${userId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject)
})

export default {getPaymentTypeById, getPaymentTypesByUserId};
