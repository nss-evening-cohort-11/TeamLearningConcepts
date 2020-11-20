import axios from 'axios';
import {baseUrl} from './constants.json';

const addInvoiceLineItem = (newLineItem) => axios.post(`${baseUrl}/invoiceLineItems`, newLineItem);

const deleteCourseFromCart = (invoiceId, courseId) => axios.delete(`${baseUrl}/invoiceLineItems/${invoiceId}-${courseId}`);

export default { addInvoiceLineItem, deleteCourseFromCart };
