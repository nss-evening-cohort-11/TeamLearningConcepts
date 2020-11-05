import React from 'react';
import { Link } from 'react-router-dom';

import './PaymentOptions.scss';

class PaymentOptions extends React.Component {
  render() {
    const paymentOptionsLink = '/payment-options';

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
                  <p>Payment Type cards here</p>
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
