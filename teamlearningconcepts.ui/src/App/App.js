import React from 'react';
import fbConnection from "../helpers/data/connection";
import firebase from 'firebase/app';
import Login from '../components/pages/Login/Login';
import './App.scss';
import 'firebase/auth';




import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';



import Home from '../components/pages/Home/Home';

import Auth from '../components/pages/Auth/Auth';
import Courses from '../components/pages/Courses/Courses';
import MyNavbar from '../components/shared/MyNavbar/MyNavbar';
import Users from '../components/pages/Users/Users';
import SingleUser from '../components/shared/SingleUser/SingleUser';
import SingleCategory from '../components/pages/SingleCategory/SingleCategory';
import SearchResults from '../components/pages/SearchResults/SearchResults';
import ShoppingCart from '../components/pages/ShoppingCart/ShoppingCart';
import SingleCourseView from '../components/pages/SingleCourseView/SingleCourseView';
import courseData from '../helpers/data/courseData';

fbConnection();

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
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  };
    
  

  componentWillUnmount() {
    // this.removeListener();
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
              <PrivateRoute path='/home' component={Home} authed={authed} />
                <PrivateRoute path='/users/:usersId' component={SingleUser} authed={authed} />
                <PrivateRoute path='/courses/singleCourseView/:courseId' component={SingleCourseView} authed={authed} />
                <PrivateRoute path='/courses/:courseTypeId' component={SingleCategory} authed={authed} />
                <PrivateRoute path='/users' component={Users} authed={authed} />
                <PrivateRoute path='/courses' component={Courses} authed={authed} />
                <Route path='/search-results' render={() => <SearchResults filteredCourses={this.state.filteredCourses} />} authed={authed} />
               <Route path="/login" component={Login} authed={authed}/>
                <Route path='/shopping-cart' render={() => <ShoppingCart />} authed={authed} />
                <PublicRoute path='/auth' component={Auth} authed={authed} />
                <Redirect from= "*" to="/home"/>
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

