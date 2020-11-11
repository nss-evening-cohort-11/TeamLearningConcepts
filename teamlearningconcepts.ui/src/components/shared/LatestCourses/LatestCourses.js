import React from 'react';
import { Link } from 'react-router-dom'
import couseData from '../../../helpers/data/courseData';
import './LatestCourses.scss'


class LatestCourses extends React.Component {

  state = { latestCourses: [] }

  componentDidMount() {
    couseData.getLatestCourses()
    .then(latestCourses => { this.setState({latestCourses})});
  }


  render() {
    const {latestCourses} = this.state;
    const buildLatestCoursesLinks = latestCourses.map((course) => {
      return (<Link to={`courses/singleCourseView/${course.courseId}`}>{course.title}</Link>)
    })
 

    return(
      <div className="LatestCourses">
      <h2 className="section-header">Latest Courses</h2>
        <div className="row">
          {buildLatestCoursesLinks}
        </div>
      </div>
    )
  }
}

export default LatestCourses;

