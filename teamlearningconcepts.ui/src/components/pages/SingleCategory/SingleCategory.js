import React from 'react';
import SingleCourseCard from '../../shared/SingleCourseCard/SingleCourseCard';
import courseData from '../../../helpers/data/courseData';
import courseTypeData from '../../../helpers/data/courseTypeData';
import './SingleCategory.scss';

class SingleCategory extends React.Component {
  state = {
    courses: [],
    courseType: {}
  }

  componentDidMount() {
    window.scroll(0, 0);
    const { courseTypeId } = this.props.match.params;

    courseTypeData.getSingleCourseType(courseTypeId)
      .then(courseType => this.setState({ courseType }))
    courseData.getAllCoursesByCourseTypeId(courseTypeId)
      .then(courses => this.setState({ courses }))  
  }

  render() {
    const { courseType, courses } = this.state;

    const buildCategoryCourses = courses.map(course => {
      return (<SingleCourseCard key={course.courseId} course={course} />)
    })

    return (
      <div className="SingleCategory w-100">
        <h2 className="m-3 mb-4">{courseType.courseTypeName} Courses</h2>
        <div className="card d-flex flex-wrap w-100">
          {buildCategoryCourses}
        </div>
      </div>
    )
  }
};

export default SingleCategory;
