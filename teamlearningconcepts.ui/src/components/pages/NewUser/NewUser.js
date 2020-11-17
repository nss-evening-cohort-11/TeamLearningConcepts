import React from 'react';

import authData from '../../../helpers/data/authData';

// import userData from '../../../helpers/data/userData';

class NewUser extends React.Component {
  state = {
    newFirstName: '',
    newLastName: '',
    newUserName: '',
    newPhotoUrl: '',
    newEmail: '',
    newPassword: '',
     }

  newFirstName = (e) => {
    e.preventDefault();
    this.setState({ newFirstName: e.target.value});
  }

  newLastName = (e) => {
    e.preventDefault();
    this.setState({ newLastName: e.target.value});
  }

  newUserName = (e) => {
    e.preventDefault();
    this.setState({ newUserName: e.target.value});
  }

  newPhotoUrl = (e) => {
    e.preventDefault();
    this.setState({ newPhotoUrl: e.target.value});
  }

  newEmail = (e) => {
    e.preventDefault();
    this.setState({ newEmail: e.target.value});
  }

  newPassword = (e) => {
    e.preventDefault();
    this.setState({ newPassword: e.target.value});
  }

  saveNewUser = (e) => {
    e.preventDefault();
    const {
      newFirstName,
      newLastName,
      newUserName,
      newPhotoUrl,
      newEmail,
      newPassword,
      
  
    } = this.state;

const newUser = {
    firstName: newFirstName,
    lastName: newLastName,
    userName:  newUserName,
    photoUrl:  newPhotoUrl,
    email:  newEmail,
    password:  newPassword,
    // uid: authData.getUid(),

};

authData.registerUser(newUser)
.then(() => this.props.history.push('/users'))
.catch((err) => console.error('unable to add new User'))
}

render() {
  const {

    newFirstName,
      newLastName,
      newUserName,
      newPhotoUrl,
      newEmail,
      newPassword,
        } = this.state;

  return (
    <div className="New col-12">
      <h1>New User</h1>
      <form className="col-6 offset-3 text-left">
        <div className="form-group">
        <label htmlFor="new-first-name">First Name</label>
      <input
        type="text"
        className="form-control"
        id="new-name"
        value={newFirstName}
        onChange={this.newFirstName}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-last-name">Last Name</label>
      <input
        type="text"
        className="form-control"
        id="new-last-name"
        value={newLastName}
        onChange={this.newLastName}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-user-name">User Name</label>
      <input
        type="text"
        className="form-control"
        id="new-user-name"
        value={newUserName}
        onChange={this.newUserName}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-photoUrl">Place Photo Url here</label>
      <input
        type="text"
        className="form-control"
        id="new-photoUrl"
        value={newPhotoUrl}
        onChange={this.newPhotoUrl}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-email">Email</label>
      <input
        type="text"
        className="form-control"
        id="new-email"
        value={newEmail}
        onChange={this.newEmail}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-password">Password</label>
      <input
        type="text"
        className="form-control"
        id="new-password"
        value={newPassword}
        onChange={this.newPassword}
        />
        </div>
        <button className="btn btn-secondary" onClick={this.saveNewUser}>Save New User</button>
      </form>
    </div>
  )
}
}

export default NewUser;

  