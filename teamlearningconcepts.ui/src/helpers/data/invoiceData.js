import axios from 'axios';

import {baseUrl} from './constants.json';

const putCompletedInvoice = (completedInvoice) => 
    axios.put(`${baseUrl}/invoices/complete`, completedInvoice);

export default {putCompletedInvoice};
