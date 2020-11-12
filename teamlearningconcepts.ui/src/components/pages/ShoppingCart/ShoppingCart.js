import React from 'react';
import { Link } from 'react-router-dom';
import invoiceData from '../../../helpers/data/invoiceData';
import courseData from '../../../helpers/data/courseData';

import './ShoppingCart.scss';

class ShoppingCart extends React.Component {
  state = {
      invoice: {},
      cart: []
  }

  componentDidMount() {
      const userId = 1;
      invoiceData.getInvoiceByUserId(userId)
        .then(invoice => {
          this.setState({invoice})
          courseData.getCoursesByInvoiceId(this.state.invoice.invoiceId)
            .then(courses => this.setState({cart: courses}))
        })    
  }

  render(){
    const paymentOptionsLink = '/payment-options';

      return(
          <div className="ShoppingCart">
              <div className="shopping-cart-progress d-flex">
                  <p className="shopping-cart-border">1. Shopping Cart</p>
                  <p className="payment-options-border">2. Payment Options</p>
              </div>
              <div className="shopping-cart-summary-area d-flex">
                  <div className="w-75 shopping-cart-items">
                      <p className="cart-title">Shopping Cart</p>
                      <hr />
                      <p>Course cards here</p>
                      <hr />
                  </div>
                  <div className="w-25 shopping-summary">
                      <p className="cart-title">Summary</p>
                      <hr />
                      <p>Subtotal:</p>
                      <p>Taxes:</p>
                      <hr />
                      <p>Total:</p>
                      <Link className="btn w-50 btn-light float-right mt-3 mb-0" to={paymentOptionsLink}>Next</Link>
                  </div>
              </div>
          </div>
      )
  }
}

export default ShoppingCart;
