import React from 'react';
import SingleCourseCard from '../SingleCourseCard/SingleCourseCard';
import courseTypeShape from 
import './SingleCategory.scss';

class SingleCategory extends React.Component {
  state = {
    courses: [],
  }

  static propTypes = {
    courseType: courseTypeShape.courseShapeType
  }

  render() {
    const {courseType} = this.props;
    const {courses} = this.state;

    const buildCourseCards = courses.map(course => (
      <SingleCourseCard key={course.id} course={course} />
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
