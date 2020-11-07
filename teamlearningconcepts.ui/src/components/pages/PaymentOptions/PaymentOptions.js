import React from 'react';
import { Link } from 'react-router-dom';
import {
  CustomInput,
  Form,
  FormGroup
} from 'reactstrap';
import paymentTypeData from '../../../helpers/data/paymentTypeData';
import invoiceData from '../../../helpers/data/invoiceData';

import './PaymentOptions.scss';

class PaymentOptions extends React.Component {
  state ={
    paymentTypes: [],
    selectedPaymentTypeId: 0
  }

  componentDidMount() {
    const userId = 1;
    paymentTypeData.getPaymentTypesByUserId(userId)
      .then(paymentTypes => this.setState({paymentTypes}))
  }

  setInvoiceToCompleted = (e) => {
    e.preventDefault();
    const invoiceId = 1;
    const { selectedPaymentTypeId } = this.state;

    console.log(invoiceId, selectedPaymentTypeId);

    invoiceData.putInvoicePaymentType(invoiceId, selectedPaymentTypeId)
      .then(/* push to confirmation page */)
  }

  paymentChange = (e) => {
    this.setState({selectedPaymentTypeId: e.target.value})
  }

  render() {
    const {paymentTypes} = this.state;

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
              </div>
              <div className="w-25 shopping-summary">
                  <p className="cart-title">Summary</p>
                  <hr />
                  <p>Subtotal:</p>
                  <p>Taxes:</p>
                  <hr />
                  <p>Total:</p>
                  <Link className="btn w-50 btn-light float-right mt-3 mb-0" onClick={this.setInvoiceToCompleted}>Order</Link>
              </div>
          </div>
      </div>
    )
  }
}

export default PaymentOptions;
