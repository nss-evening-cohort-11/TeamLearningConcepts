import React from 'react';

import './App.scss';



import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';


import Courses from '../components/pages/Courses/Courses';
import MyNavbar from '../components/shared/MyNavbar/MyNavbar';
import Users from '../components/pages/Users/Users';
import SingleUser from '../components/shared/SingleUser/SingleUser';
import SingleCategory from '../components/pages/SingleCategory/SingleCategory';
import SearchResults from '../components/pages/SearchResults/SearchResults';

import courseData from '../helpers/data/courseData';


const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};



class App extends React.Component {
  state = {
    authed: true,
    searchValue: '',
    filteredCourses: [],
  }

  componentDidMount() {

  };
    
  

  componentWillUnmount() {

  };

  searchValueStateChange = (e) => {
    this.setState({ searchValue: e.target.value });
}

  searchFunction = () => {
    const searchVal = this.state.searchValue;
    if (searchVal != '') {
      courseData.search(searchVal)
      .then(response => { this.setState({ filteredCourses: response }) });
    } 
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar filteredCourses={this.state.filteredCourses} searchValue={this.state.searchValue} searchValueStateChange={this.searchValueStateChange} searchFunction={this.searchFunction} />
            <div className="container">
              <div className="row">
              <Switch>
                <PrivateRoute path='/users/:usersId' component={SingleUser} authed={authed} />
                <PrivateRoute path='/courses/:courseTypeId' component={SingleCategory} authed={authed} />
                <PrivateRoute path='/users' component={Users} authed={authed} />
                <PrivateRoute path='/courses' component={Courses} authed={authed} />
                <Route path='/search-results' render={() => <SearchResults filteredCourses={this.state.filteredCourses} />} authed={authed} />
                <Redirect from= "*" to="/users"/>
              </Switch>
              </div>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;

