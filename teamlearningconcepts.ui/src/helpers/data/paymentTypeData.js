import axios from 'axios';

import {baseUrl} from './constants.json';

const getPaymentTypesByUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/paymentTypes/user/${userId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject)
})

export default {getPaymentTypesByUserId};
