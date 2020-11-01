import React from 'react';
import couseData from '../../../helpers/data/courseData';
import SingleCourseCard from '../SingleCourseCard/SingleCourseCard';


class LatestCourses extends React.Component {

  state = { latestCourses: [] }

  componentDidMount() {
    couseData.getLatestCourses()
    .then(latestCourses => { this.setState({latestCourses})});
  }


  render() {

    const {latestCourses} = this.state;
    console.log(typeof latestCourses);
    const buildLatestCoursesCards = latestCourses.map((course) => {
      return (<SingleCourseCard course={course} />)
    })


    return(
      <div className="row">
      {buildLatestCoursesCards}
      </div>
    )
  }
}

export default LatestCourses;

