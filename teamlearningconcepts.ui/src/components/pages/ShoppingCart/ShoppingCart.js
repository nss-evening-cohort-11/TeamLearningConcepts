import React from 'react';
import { Link } from 'react-router-dom';
import invoiceData from '../../../helpers/data/invoiceData';
import invoiceLineItemData from '../../../helpers/data/invoiceLineItemData';
import courseData from '../../../helpers/data/courseData';

import CartCourseCard from '../../shared/CartCourseCard/CartCourseCard';

import './ShoppingCart.scss';

class ShoppingCart extends React.Component {
  state = {
      invoice: {},
      cart: []
  }

  getCartData = () => {
    const userId = 3;
    invoiceData.getInvoiceByUserId(userId)
      .then(invoice => {
        this.setState({invoice})
        courseData.getCoursesByInvoiceId(this.state.invoice.invoiceId)
          .then(courses => this.setState({cart: courses}))
      })  
  }

  componentDidMount() {
    this.getCartData();
  }

  removeCourseFromCart = (courseId) => {
    const invoiceId = this.state.invoice.invoiceId;
    invoiceLineItemData.deleteCourseFromCart(invoiceId, courseId)
    .then(() => this.getCartData())
    .catch((err) => console.log("could not delete", err));
  }

  render(){
    const paymentOptionsLink = '/payment-options';
    const { cart, invoice } = this.state;

    const buildCards = cart.map((course) => (
        <CartCourseCard course={course} key={course.courseId} removeCourseFromCart={this.removeCourseFromCart} />
    ))

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
                      <div className="courses-in-cart d-flex align-content-around flex-wrap">
                        {invoice ? buildCards : 'Your cart is empty'}
                      </div>
                      <hr />
                  </div>
                  <div className="w-25 shopping-summary">
                      <p className="cart-title">Summary</p>
                      <hr />
                      <p>Subtotal: <span className="float-right">${invoice ? invoice.subtotal : '0.00'}</span></p>
                      <p>Taxes: <span className="float-right">${invoice ? invoice.taxes : '0.00'}</span></p>
                      <hr />
                      <p>Total: <span className="float-right">${invoice ? invoice.invoiceTotal : '0.00'}</span></p>
                      {invoice 
                      ? <Link className="btn w-50 btn-light float-right mt-3 mb-0" to={paymentOptionsLink}>Next</Link>
                      : <button className="btn w-50 btn-light float-right mt-3 mb-0" disabled>Next</button>
                      }
                      <button className="btn w-50 btn-light mt-3 mb-0">Cancel</button>
                  </div>
              </div>
          </div>
      )
  }
}

export default ShoppingCart;
