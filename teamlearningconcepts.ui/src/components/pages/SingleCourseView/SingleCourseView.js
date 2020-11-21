import React from 'react';

import authData from '../../../helpers/data/authData';
import courseData from '../../../helpers/data/courseData';
import invoiceData from '../../../helpers/data/invoiceData';
import invoiceLineItemData from '../../../helpers/data/invoiceLineItemData';
import './SingleCourseView.scss';

class SingleCourseView extends React.Component {
  state = {
    course: {},    
  }

  componentDidMount() {    
    const courseId = this.props.match.params.courseId;
    courseData.getSingleCourseView(courseId)
      .then(course => this.setState({ course }))  
  }

 addToCart = () => {
  const { course } = this.state;
  const userId = 1;
  const newUserCourse = {
    CourseId: course.courseId,
    UserId: userId,
  }
  invoiceData.getInvoiceByUserId(userId).then((invoice) => {
    if (invoice) {
      const newInvoiceLine = {
        CourseId: course.courseId,
        InvoiceId: invoice.invoiceId,
      }
      invoiceLineItemData.addInvoiceLineItem(newInvoiceLine);
    } else {
      invoiceData.addInvoice(newUserCourse);
    }
  });
}

  render() {
    const { course } = this.state;   

    return (
      <div className="SingleCourseView">
        <main className="d-flex flex-wrap">
        <figure className="course-image">
        <img className="course-Url" src={course.photoUrl} alt="coursePhoto" />
        </figure>
       <div className="course-info">
       <h2 className="course-title">{course.title} </h2>
       <p className="course-description">{course.description}</p>
          <h3 className="course-price">${course.price}</h3> 
          <button onClick={this.addToCart} className="btn btn-cream">Add to Cart</button>
       </div>
        </main>
           </div>
         )
  }
};

export default SingleCourseView;


//hardcoded userId, paymentTypeId
