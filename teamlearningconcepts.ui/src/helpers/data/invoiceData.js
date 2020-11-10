import axios from 'axios';

import {baseUrl} from './constants.json';

const putInvoicePaymentType = (invoiceId, selectedPaymentTypeId) => axios.put(`${baseUrl}/invoices/complete/${invoiceId}`, selectedPaymentTypeId);

export default {putInvoicePaymentType};
