import React from 'react';
import SingleCourseCard from '../SingleCourseCard/SingleCourseCard';
import courseTypeShape from '../../../helpers/propz/courseTypeShape';
import './SingleCategory.scss';
import courseData from '../../../helpers/data/courseData';

class SingleCategory extends React.Component {
  state = {
    courses: [],
  }

  static propTypes = {
    courseType: courseTypeShape.courseShapeType
  }

  componentDidMount() {
    const {courseType} = this.props;

    courseData.getAllCoursesByCourseTypeId(courseType.courseTypeId)
      .then(courses => { this.setState({courses}) })
  }

  render() {
    const {courseType} = this.props;
    const {courses} = this.state;

    const buildCourseCards = courses.map(course => (
      <SingleCourseCard key={course.courseId} course={course} />
    ));

    return (
      <div className="SingleCategory">
        <strong className="m-2">{courseType.courseTypeName}</strong>
        <div className="d-flex">
          {buildCourseCards}
        </div>
      </div>
    )
  }
}

export default SingleCategory;
