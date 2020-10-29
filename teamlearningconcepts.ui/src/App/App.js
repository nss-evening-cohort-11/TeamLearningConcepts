import React from 'react';
import './App.scss';

import MyNavbar from '../components/shared/MyNavbar/MyNavbar';
import Users from '../components/pages/Users/Users';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Users />
    </div>
  );
}

export default App;
