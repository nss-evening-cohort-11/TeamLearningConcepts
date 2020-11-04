import React from 'react';
import courseData from '../../../helpers/data/courseData';
import MyCarousel from '../../shared/MyCarousel/MyCarousel';
import SingleCourseCard from '../../shared/SingleCourseCard/SingleCourseCard';


import './Home.scss';

class Home extends React.Component {
  state = {
    MyCarousel: [],
    courses: [],

  }

  componentDidMount() {
    courseData.getAllCoursesByCourseTypeId(1)
      .then(courses => { this.setState({courses}) });
  }


  render() {
    const {courses} = this.state;
    const salesCards = courses.map((course) => {
         return (<SingleCourseCard key = {course.courseId} course={course} />)
    })

    
  
    return (
      <div className="Home container">
      <h2 className ="title">Welcome to Team Learning Concepts</h2>
      <h5 className ="tagLine">Are you a business professional looking to improve your skillset?</h5>
      <img className ="introPic"src="https://live.staticflickr.com/65535/50559997591_d589d5a648_n.jpg" width="320" height="213" alt="laptopPic"></img>
      <img className ="introPic" src="https://live.staticflickr.com/65535/50559998796_365ce1df31_n.jpg" width="320" height="213" alt="groupLearn"></img>
      <h2 className = "featured">Featured Courses</h2>
      <MyCarousel />
   <h2 className = "salesCourses">Check out all our Sales Courses</h2>
<div className = "sales Container d-flex flex wrap">{salesCards}</div>
 <button>Shop Now</button>
  <div className = "aboutUs">
    <h2 className = "aboutUs">About Us</h2>
  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
  </div>
</div>
         );
    }
    
}  
      export default Home;