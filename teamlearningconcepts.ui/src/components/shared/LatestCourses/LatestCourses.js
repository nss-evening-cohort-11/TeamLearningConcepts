import React from 'react';
import couseData from '../../../helpers/data/courseData';
import SingleCourseCard from '../SingleCourseCard/SingleCourseCard';
import './LatestCourses.scss'


class LatestCourses extends React.Component {

  state = { latestCourses: [] }

  componentDidMount() {
    couseData.getLatestCourses()
    .then(latestCourses => { this.setState({latestCourses})});
  }


  render() {

    const {latestCourses} = this.state;
    const buildLatestCoursesCards = latestCourses.map((course) => {
      return (<SingleCourseCard course={course} />)
    })


    return(
      <div className="LatestCourses">
      <h2 className="section-header">Latest Courses</h2>

          <div className="row">
          {buildLatestCoursesCards}
          </div>
      </div>
    )
  }
}

export default LatestCourses;

