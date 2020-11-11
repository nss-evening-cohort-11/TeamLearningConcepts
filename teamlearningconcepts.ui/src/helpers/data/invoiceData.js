import axios from 'axios';

import {baseUrl} from './constants.json';

const putCompletedInvoice = (invoiceId, paymentTypeId, invoiceTotal) => 
    axios.put(
      `${baseUrl}/invoices/complete`, 
      {
        InvoiceId: invoiceId,
        PaymentTypeId: paymentTypeId,
        InvoiceTotal: invoiceTotal
      }
      );

export default {putCompletedInvoice};
