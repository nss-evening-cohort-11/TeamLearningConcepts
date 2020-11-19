import React from 'react';
import { Link } from 'react-router-dom';
import invoiceData from '../../../helpers/data/invoiceData';
import courseData from '../../../helpers/data/courseData';

import CartCourseCard from '../../shared/CartCourseCard/CartCourseCard';

import './OrderConfirmation.scss';
import paymentTypeData from '../../../helpers/data/paymentTypeData';

class OrderConfirmation extends React.Component {
  state = {
    invoice: {},
    cart: [],
    paymentType: {}
  }

  componentDidMount() {
      const invoiceId = this.props.match.params.invoiceId;

      invoiceData.getInvoiceByInvoiceId(invoiceId)
        .then(invoice => {
          this.setState({invoice})
          courseData.getCoursesByInvoiceId(this.state.invoice.invoiceId)
            .then(courses => this.setState({cart: courses}))
          paymentTypeData.getPaymentTypeById(invoice.paymentTypeId)
            .then(paymentType => this.setState({paymentType}))
        })    
  }

  render() {
    const homeLink = '/home';
    const { cart, invoice, paymentType } = this.state;

    const buildCards = cart.map((course) => (
        <CartCourseCard course={course} key={course.courseId} />
    ))

    return (
      <div className="OrderConfirmation">
          <div className="shopping-cart-progress d-flex mb">
              <p className="payment-options-border">Thank you for your order!</p>
          </div>
          <div className="shopping-cart-summary-area d-flex">
              <div className="w-75 shopping-cart-items">
                  <p className="cart-title">Completed Order</p>
                  <hr />
                  <div className="courses-in-cart d-flex align-content-around flex-wrap">
                      {buildCards}
                  </div>
                  <hr />
              </div>
              <div className="w-25 shopping-summary">
                  <p className="cart-title">Summary</p>
                  <hr />
                  <p>Subtotal: <span className="float-right">${invoice.subtotal}</span></p>
                  <p>Taxes: <span className="float-right">${invoice.taxes}</span></p>
                  <hr />
                  <p>Total: <span className="float-right">${invoice.invoiceTotal}</span></p>
                  <p className="bg-danger rounded px-3 py-2 text-center">You paid with {paymentType.paymentName}</p>
                  <Link className="btn w-100 btn-light float-right mt-3 mb-0" to={homeLink}>Continue Shopping</Link>
              </div>
          </div>
      </div>
    )
  }
}

export default OrderConfirmation;
