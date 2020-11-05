import React from 'react';
import { Link } from 'react-router-dom';
import courseData from '../../../helpers/data/courseData';
import courseShape from '../../../helpers/propz/courseShape';
import './SingleCourseCard.scss';
import Courses from '../../pages/Courses/Courses';
class SingleCourseCard extends React.Component {
  
  state = {
    courses: [],
    singleCourse: 0,

  }
  static propTypes = {
    course: courseShape.courseShape
  }

  componentDidMount() {
    const { courseId } = this.props.match;

    courseData.getSingleCourse(courseId)
    .then(singleCourse => { this.setState({singleCourse})})
  }
  render() {
    const {course} = this.props;
    const { courseId } = this.props.match;
    const {singleCourse, courses} = this.state;
    const singleCourseView = `/courses/singleCourse/${course.courseId}`;

    const buildSingleView = courses.map(course => (
      <SingleCourseCard key={course.courseId} course={course} /> 
    ))
    return (
      <div className="SingleCourseCard">
        <div className="card m-3">
          <img className="card-img-top" src={course.photoUrl} alt="Course Card" />
          <div className="card-body">
            <h5 className="card-title">{course.title}</h5>
            <p className="card-text">{course.description}</p>
            <h4 className="d-inline">{course.courseId} ({singleCourse})</h4>
            <Link className="btn btn-primary" to={singleCourseView}>View Course</Link>
          </div>
          <div className="d-flex flex-wrap">
            {buildSingleView}
        </div>  
        </div>        
      </div>
    )
  }
} 

export default SingleCourseCard;
