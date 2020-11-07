import axios from 'axios';

import {baseUrl} from './constants.json';

const putInvoicePaymentType = (invoiceId, selectedPaymentTypeId) => axios.put(`${baseUrl}/invoices/${invoiceId}`, selectedPaymentTypeId);

export default {putInvoicePaymentType};
