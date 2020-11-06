import React from 'react';
import { Link } from 'react-router-dom';
import {
  CustomInput,
  Form,
  FormGroup,
  Label
} from 'reactstrap';
import paymentTypeData from '../../../helpers/data/paymentTypeData';

import './PaymentOptions.scss';

class PaymentOptions extends React.Component {
  state ={
    paymentTypes: []
  }

  componentDidMount() {
    const userId = 4;
    console.log(userId);
    paymentTypeData.getPaymentTypesByUserId(userId)
      .then(paymentTypes => this.setState({paymentTypes}))
  }

  render() {
    const {paymentTypes} = this.state;
    const paymentOptionsLink = '/payment-options';

    const buildPaymentTypeList = paymentTypes.map(paymentType => {
      return (<CustomInput className="m-2" type="radio" id="exampleCustomRadio" name="customRadio" label={paymentType.paymentName + ' x' + paymentType.accountNumber.toString().slice(-4)} />)
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
                  <Link className="btn w-50 btn-light float-right mt-3 mb-0" to={paymentOptionsLink}>Order</Link>
              </div>
          </div>
      </div>
    )
  }
}

export default PaymentOptions;
