import React from 'react';
import { Link } from 'react-router-dom';
import SingleCourseCard from '../SingleCourseCard/SingleCourseCard';
import courseTypeShape from '../../../helpers/propz/courseTypeShape';
import courseData from '../../../helpers/data/courseData';
import './SingleCategoryCard.scss';

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
    const { courseType } = this.props;
    const { courses, numberOfCourses } = this.state;
    const singleCategoryLink = `/courses/${courseType.courseTypeId}`;

    const buildCourseCards = courses.map(course => (
      <SingleCourseCard key={course.courseId} course={course} />
    ));

    return (
      <div className="SingleCategoryCard m-3">
        <div className="card">
          <div className="card-header">
            <h4 className="d-inline">{courseType.courseTypeName} ({numberOfCourses})</h4>
            <Link className="btn btn-primary btn-sm float-right d-inline" to={singleCategoryLink}>View All</Link>
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
