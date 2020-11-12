import React from 'react';
import { Link } from 'react-router-dom';

import authRequests from '../../../helpers/data/authData';

class Login extends React.Component {
  state = {
    users: {
      email: '',
      password: '',
    },
  };

  loginClickEvent = (e) => {
    const { users } = this.state;
    e.preventDefault();
    authRequests
      .loginUser(users)
      .then(() => {
        this.props.history.push('/users');
      })
      .catch(error => {
        console.error('there was an error in registering', error);
      });
  };

  emailChange = e => {
    const tempUser = { ...this.state.users };
    tempUser.email = e.target.value;
    this.setState({ user: tempUser });
  };

  passwordChange = e => {
    const tempUser = { ...this.state.users };
    tempUser.password = e.target.value;
    this.setState({ user: tempUser });
  };

  render () {
    const { users } = this.state;
    return (
      <div className="Login">
        <div id="login-form">
          <h1 className="text-center">Login</h1>
          <form className="form-horizontal col-sm-6 col-sm-offset-3">
            <div className="form-group">
              <label htmlFor="inputEmail" className="col-sm-8 control-label">
                Email:
              </label>
              <div className="col-sm-20">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                  value={users.email}
                  onChange={this.emailChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword" className="col-sm-8 control-label">
                Password:
              </label>
              <div className="col-sm-20">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  value={users.password}
                  onChange={this.passwordChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 text-center">
                <Link to="/register">Need to Register?</Link>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <button
                  type="submit"
                  className="btn btn-default col-xs-12"
                  onClick={this.loginClickEvent}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;