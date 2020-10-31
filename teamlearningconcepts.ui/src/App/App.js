import React from 'react';
import './App.scss';
import Courses from '../components/pages/Courses/Courses';
import MyNavbar from '../components/shared/MyNavbar/MyNavbar';
import Users from '../components/pages/Users/Users';
import LatestCourses from '../components/shared/LatestCourses/LatestCourses';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <LatestCourses />
      <Courses />
      <Users />
    </div>
  );
}

export default App;
