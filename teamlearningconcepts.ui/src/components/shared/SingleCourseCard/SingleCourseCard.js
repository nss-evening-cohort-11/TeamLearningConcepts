import React from 'react';
import { Link } from 'react-router-dom';
import courseData from '../../../helpers/data/courseData';
import courseShape from '../../../helpers/propz/courseShape';
import './SingleCourseCard.scss';
import Courses from '../../pages/Courses/Courses';
class SingleCourseCard extends React.Component {
  
  state = {
    course: {},
  

  }
  static propTypes = {
    course: courseShape.courseShape
  }

   render() {
    const {course} = this.props;
   
   
    const singleCourseView = `/courses/singleCourseView/${course.courseId}`;

    return (
      <div className="SingleCourseCard">
        <div className="card m-3">
          <img className="card-img-top" src={course.photoUrl} alt="Course Card" />
          <div className="card-body">
            <h5 className="card-title">{course.title}</h5>
            <p className="card-text">{course.description}</p>
            <Link className="btn btn-dark-blue" to={singleCourseView}>View Course</Link>
          </div>
         </div>        
      </div>
    )
  }
} 

export default SingleCourseCard;
