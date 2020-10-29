import React from 'react';
import './App.scss';
import Users from '../components/pages/Users/Users';
import LatestCourses from '../components/shared/LatestCourses/LatestCourses';

function App() {
  return (
    <div className="App">
      <LatestCourses />
      <Users />
    </div>
  );
}

export default App;
