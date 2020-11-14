import React from 'react';

import courseData from '../../../helpers/data/courseData';
import invoiceData from '../../../helpers/data/invoiceData';
import './SingleCourseView.scss';

class SingleCourseView extends React.Component {
  state = {
    course: {},
    
  }

  componentDidMount() {
    
    const  courseId  = this.props.match.params.courseId;
       courseData.getSingleCourseView(courseId)
      .then(course => this.setState({ course }))  
  }

 addToCart = () => {
  const { course } = this.state;
  const userId = 3;
  const newUserCourse = {
    CourseId: course.courseId,
    UserId: userId,
  }
  invoiceData.getInvoiceByUserId(userId).then((response) => {
    if (response) {
      console.log('in the if!');
      // create invoice line item
      // take invoice id
    } else {
      console.log('in the else!');
      invoiceData.addInvoice(newUserCourse);
    }
  });
}

  render() {
    const { course } = this.state;   

    return (
      <div className="SingleCourseView">
       <h2 className="course-title">{course.title} </h2>
        <img className="course-Url" src={course.photoUrl} alt="coursePhoto" />
        <h3 className="course-description">{course.description}</h3>
          <h3 className="course-price">${course.price}</h3> 
          <button onClick={this.addToCart} className="btn btn-primary">Add to Cart</button>
           </div>
         )
  }
};

export default SingleCourseView;


//hardcoded userId, paymentTypeId
