import axios from 'axios';
import {baseUrl} from './constants.json';

const addInvoiceLineItem = (newLineItem) => axios.post(`${baseUrl}/invoiceLineItems`, newLineItem);

export default { addInvoiceLineItem };
