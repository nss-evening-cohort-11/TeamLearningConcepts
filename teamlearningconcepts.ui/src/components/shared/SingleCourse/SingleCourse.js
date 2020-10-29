import React from 'react';

class SingleCourse extends React.Component {
  render() {

    const { course } = this.props;

    return(
      <div className="singleCourse">
        
      <h3>Inside a single course Component</h3>
      <h3>{course.title}</h3>
      <h3>{course.description}</h3>
      <img src={course.photoUrl} atl=""></img>
      <h3>{course.price}</h3>
      <h3>{course.id}</h3>
      <h3>{course.typeId}</h3>
      </div>
    )
  }
}

export default SingleCourse;
