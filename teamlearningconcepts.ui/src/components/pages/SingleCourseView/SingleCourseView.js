import React from 'react';
import SingleCourseCard from '../../shared/SingleCourseCard/SingleCourseCard';
import courseData from '../../../helpers/data/courseData';

import './SingleCourseView.scss';

class SingleCourse extends React.Component {
  state = {
    course: [],
    
  }

  componentDidMount() {
    
    const { courseId } = this.props.match.params;

    
    courseData.getSingleCourseById(courseId)
      .then(course => this.setState({ course }))  
  }

  render() {
    const { course } = this.state;

    const buildSingleCourse = course.map(course => {
      return (<SingleCourseCard key={course.courseId} course={course} />)
    })

    return (
      <div className="SingleCategory w-100">
        <h2 className="m-3 mb-4">{course.courseId} Courses</h2>
        <div className="card m-3">
          <div className="d-flex flex-wrap w-100">
            {buildSingleCourse}
          </div>
        </div>
      </div>
    )
  }
};

export default SingleCourse;
