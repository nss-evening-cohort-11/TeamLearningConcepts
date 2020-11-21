import React from 'react';
import courseData from '../../../helpers/data/courseData';
import MyCarousel from '../../shared/MyCarousel/MyCarousel';
import SingleCourseCard from '../../shared/SingleCourseCard/SingleCourseCard';
import LatestCourses from '../../shared/LatestCourses/LatestCourses';


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
      <h1 className="title">Welcome to Team Learning Concepts</h1>
      <h2 className="tagLine">Are you a business professional looking to improve your skillset?</h2>
      <hr />
      <div className="intro-photos">
      <img className="introPic" src="https://live.staticflickr.com/65535/50559997591_d589d5a648_n.jpg" alt="laptopPic"></img>
      <img className="introPic" src="https://live.staticflickr.com/65535/50559998796_365ce1df31_n.jpg" alt="groupLearn"></img>
      </div>
      <hr />
      <h3 className="featured">Featured Courses</h3>
      <MyCarousel />
   <h2 className="salesCourses">Check out all our Sales Courses</h2>
<div className="sales d-flex flex-wrap">{salesCards}</div>
 <div className="text-center"><button className="btn btn-dark-blue btn-shop-now">Shop Now</button></div>
  <div className="aboutUs">
    <h2 className="aboutUs">About Us</h2>
  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
  </div>
  <LatestCourses />
</div>
         );
    }
    
}  
      export default Home;
