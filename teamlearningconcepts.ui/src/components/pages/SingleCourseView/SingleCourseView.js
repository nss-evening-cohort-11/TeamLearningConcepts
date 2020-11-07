import React from 'react';

import courseData from '../../../helpers/data/courseData';
import courses from '../../pages/Courses/Courses';
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
  console.log("you clicked the Add to Cart button")
}

  render() {
    const { course } = this.state;
    const { courseId } = this.props.match.params;
   


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