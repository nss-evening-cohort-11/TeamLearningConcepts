import React from 'react';
import courseShape from '../../../helpers/propz/courseShape';
import './SingleCourseCard.scss';

class SingleCourseCard extends React.Component {
  static propTypes = {
    course: courseShape.courseShape
  }

  render() {
    const {course} = this.props;

    return (
      <div className="SingleCourseCard">
        <div className="card">
          <img className="card-img-top" src={course.photoUrl} alt="Course Card" />
          <div className="card-body">
            <h5 className="card-title">{course.title}</h5>
            <p className="card-text">{course.description}</p>
            <button className="btn btn-primary">View Course</button>
          </div>
        </div>          
      </div>
    )
  }
} 

export default SingleCourseCard;
