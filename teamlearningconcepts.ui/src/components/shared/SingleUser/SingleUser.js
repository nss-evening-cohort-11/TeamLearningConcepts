import React from 'react';
import './SingleUser.scss';

class SingleUser extends React.Component {
  render() {
    const {user} = this.props;

    return (
      <div className="SingleUser">
        <strong className="m-2">{user.username}</strong>
        <img className="m-2" src={user.photoUrl} alt="" />
        <ul>
            <li>UserId: {user.userId} </li>
            <li>FirstName: {user.firstName} </li>
            <li>Last Name: {user.lastName} </li>
            <li>PhotoUrl: {user.photoUrl} </li>
            <li>Date Created: {user.dateCreated} </li>
            <li>IsDeleted: {user.isDeleted ? 'true' : 'false'}</li>
        </ul>
      </div>
    )
  }
}

export default SingleUser;
