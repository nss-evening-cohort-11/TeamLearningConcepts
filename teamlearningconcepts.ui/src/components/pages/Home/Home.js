import React from 'react';

import Example from '../../shared/Example/Example';

import './Home.scss';

class Home extends React.Component {
  state = {
    Example: [],
  }



  render() {
  
    return (
      <div className="Home container">
      <h2 className ="title">Welcome to Team Learning Concepts</h2>
      <h5 className ="tagLine">Are you a business professional looking to improve your skillset?</h5>
      <img className ="introPic"src="https://live.staticflickr.com/65535/50559997591_d589d5a648_n.jpg" width="320" height="213" alt="laptopPic"></img>
      <img className ="introPic" src="https://live.staticflickr.com/65535/50559998796_365ce1df31_n.jpg" width="320" height="213" alt="groupLearn"></img>
      <h2 className = "featured">Featured Courses</h2>
      <Example />
   <h2 className = "salesCourses">Check out all our Sales Courses</h2>
   <img className ="salesPic" src="https://images.unsplash.com/photo-1520694478166-daaaaec95b69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"  width="320" height="213" text="How to Retain Customers - $400"></img>
  <img className = "salesPic" src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"  width="320" height="213" text="How to Navigate a Purchase Request - $350"></img>
  <button>Shop Now</button><button>Shop Now</button>
</div>
         );
    }
    
}  
      export default Home;