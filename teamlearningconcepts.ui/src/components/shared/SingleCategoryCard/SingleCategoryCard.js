import React from 'react';
import SingleCourseCard from '../SingleCourseCard/SingleCourseCard';
import courseTypeShape from '../../../helpers/propz/courseTypeShape';
import './SingleCategoryCard.scss';
import courseData from '../../../helpers/data/courseData';

class SingleCategoryCard extends React.Component {
  state = {
    courses: [],
    numberOfCourses: 0,
  }

  static propTypes = {
    courseType: courseTypeShape.courseShapeType
  }

  componentDidMount() {
    const {courseType} = this.props;

    courseData.getFirstThreeCoursesByCourseTypeId(courseType.courseTypeId)
      .then(courses => { this.setState({courses}) })
  
    courseData.getNumberOfCoursesByCourseTypeId(courseType.courseTypeId)
      .then(numberOfCourses => { this.setState({numberOfCourses}) })  
  }

  render() {
    const {courseType} = this.props;
    const {courses, numberOfCourses} = this.state;

    const buildCourseCards = courses.map(course => (
      <SingleCourseCard key={course.courseId} course={course} />
    ));

    return (
      <div className="SingleCategoryCard m-3">
        <div className="card">
          <div className="card-header">
            <h4 className="d-inline">{courseType.courseTypeName} ({numberOfCourses})</h4>
            <button className="btn btn-primary btn-sm float-right d-inline">View All</button>
          </div>
          <div className="d-flex">
            {buildCourseCards}
          </div>
        </div>
      </div>
    )
  }
}

export default SingleCategoryCard;
