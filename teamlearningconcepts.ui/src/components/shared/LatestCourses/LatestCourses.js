import React from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';
import LatestCoursesData from '../../../helpers/data/latestCoursesData';

class LatestCourses extends React.Component {

  state = { latestCourses: [] }
  
  componentDidMount() {
    console.log("inside your latest courses module");
    LatestCoursesData.getLatestCoursesProm()
    .then(latestCourses => { this.setState({latestCourses} )}); 
  }

  getLatestCourses = () => {
    LatestCoursesData.getLatestCourses()
  }

  render() {


    const {latestCourses} = this.state;
    const buildLatestCoursesList = latestCourses.map((course) => {
      return (<SingleCourse key={course.id} course={course}/>)
    })

    return(
      <div>
        <h5>Inside the LatestCourses component.</h5>
        {buildLatestCoursesList}
        
      </div>
    )
  }
}

export default LatestCourses;
