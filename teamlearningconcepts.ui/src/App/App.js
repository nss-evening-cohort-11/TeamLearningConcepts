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
  }

  componentDidMount() {

  };
    
  

  componentWillUnmount() {

  };
    
  

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar/>
            <div className="container">
              <div className="row">
              <Switch>
                <PrivateRoute path='/users/:usersId' component={SingleUser} authed={authed} />
                <PrivateRoute path='/users' component={Users} authed={authed} />
                <PrivateRoute path='/courses' component={Courses} authed={authed} />

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

