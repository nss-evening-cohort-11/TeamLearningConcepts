import React from 'react';
import courseTypeData from '../../../helpers/data/courseTypeData';
import SingleCategoryCard from '../../shared/SingleCategoryCard/SingleCategoryCard';
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
      return (<SingleCategoryCard key={courseType.courseTypeId} courseType={courseType} />)
    })

    return (
      <div className="Courses w-100">
        <h2 className="m-3 mb-4">Courses</h2>
        {buildCourseCategories}
      </div>
    )
  }
}

export default Courses;
