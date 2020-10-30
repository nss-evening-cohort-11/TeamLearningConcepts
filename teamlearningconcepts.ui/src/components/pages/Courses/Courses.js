import React from 'react';
import courseTypeData from '../../../helpers/data/courseTypeData';
import SingleCategory from '../../shared/SingleCategory/SingleCategory';
import './Courses.scss';

class Courses extends React.Component {
  state = {
    courseTypes: []
  }

  componentDidMount() {
    courseTypeData.getAllCourseTypes()
      .then(courseTypes => { this.setState({courseTypes}) });
  }

  render() {
    const {courseTypes} = this.state;
    const buildCourseCategories = courseTypes.map((courseType) => {
      return (<SingleCategory key={courseType.courseTypeId} courseType={courseType} />)
    })

    return (
      <div className="Courses">
        <h2>Courses</h2>
        {buildCourseCategories}
      </div>
    )
  }
}

export default Courses;
