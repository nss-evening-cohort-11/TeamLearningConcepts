import axios from 'axios';

import {baseUrl} from './constants.json';

const putCompletedInvoice = (invoiceId, paymentTypeId, invoiceTotal) => 
    axios.put(`${baseUrl}/invoices/complete`, {
      InvoiceId: 1,
      PaymentTypeId: 1,
      UserId: 1,
      // InvoiceDate: '2020-10-20 18:51:03.540',
      // InvoiceTotal: 1000.00,
      // IsCompleted: 1
      });

export default {putCompletedInvoice};
