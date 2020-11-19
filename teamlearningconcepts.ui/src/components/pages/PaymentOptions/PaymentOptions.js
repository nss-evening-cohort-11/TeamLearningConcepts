import React from 'react';
import {
  CustomInput,
  Form,
  FormGroup,
  Button
} from 'reactstrap';
import paymentTypeData from '../../../helpers/data/paymentTypeData';
import invoiceData from '../../../helpers/data/invoiceData';

import './PaymentOptions.scss';

class PaymentOptions extends React.Component {
  state ={
    paymentTypes: [],
    invoice: {},
    selectedPaymentTypeId: 0,
    showValidationAlert: false
  }

  componentDidMount() {
    const userId = 1;
    paymentTypeData.getPaymentTypesByUserId(userId)
      .then(paymentTypes => this.setState({paymentTypes}))
    invoiceData.getInvoiceByUserId(userId)
      .then(invoice => {
        this.setState({invoice})
      })       
  }

  setInvoiceToCompleted = (e) => {
    e.preventDefault();
    const { selectedPaymentTypeId, invoice } = this.state;

    if (selectedPaymentTypeId === 0) {
      this.setState({showValidationAlert: true});
    } else {
      const completedInvoice = {
        InvoiceId: invoice.invoiceId,
        PaymentTypeId: selectedPaymentTypeId,    
      }
  
      invoiceData.putCompletedInvoice(completedInvoice)
        .then(/* push to order confirmation page*/)
    }
  }

  paymentChange = (e) => {
    this.setState({selectedPaymentTypeId: parseInt(e.target.value), showValidationAlert: false})
  }

  render() {
    const {paymentTypes, invoice, showValidationAlert} = this.state;

    const buildPaymentTypeList = paymentTypes.map(paymentType => {
      return (<CustomInput 
        key={paymentType.paymentTypeId}
        className="m-2" 
        type="radio" 
        id={'Radio' + paymentType.paymentTypeId} 
        name="customRadio" 
        label={paymentType.paymentName + ' x' + paymentType.accountNumber.toString().slice(-4)}
        value={paymentType.paymentTypeId}
        onChange={this.paymentChange}
      />)
    })

    return (
      <div className="PaymentOptions">
          <div className="shopping-cart-progress d-flex mb">
              <p className="shopping-cart-border">1. Shopping Cart</p>
              <p className="payment-options-border">2. Payment Options</p>
          </div>
          <div className="shopping-cart-summary-area d-flex">
              <div className="w-75 shopping-cart-items">
                  <p className="cart-title">Choose Your Payment Option</p>
                  <hr />
                  <Form>
                    <FormGroup>
                      <div>
                        {buildPaymentTypeList}
                      </div>
                    </FormGroup>
                  </Form>
                  <hr />
                  {showValidationAlert
                  ? <p className="validation-alert">Please select a payment option before subitting your order.</p>
                  : ""
                  }
              </div>
              <div className="w-25 shopping-summary">
                  <p className="cart-title">Summary</p>
                  <hr />
                  <p>Subtotal: <span className="float-right">${invoice.subtotal}</span></p>
                  <p>Taxes: <span className="float-right">${invoice.taxes}</span></p>
                  <hr />
                  <p>Total: <span className="float-right">${invoice.invoiceTotal}</span></p>
                  <Button className="btn w-50 btn-light float-right mt-3 mb-0" onClick={this.setInvoiceToCompleted}>Order</Button>
              </div>
          </div>
      </div>
    )
  }
}

export default PaymentOptions;
