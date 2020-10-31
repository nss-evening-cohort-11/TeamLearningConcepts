import React from 'react';
import './App.scss';

import MyNavbar from '../components/shared/MyNavbar/MyNavbar';
import Users from '../components/pages/Users/Users';
import LatestCourses from '../components/shared/LatestCourses/LatestCourses';

function App() {
  return (
    <div className="App">

      <MyNavbar />
      <LatestCourses />
      <Users />
    </div>
  );
}

export default App;
