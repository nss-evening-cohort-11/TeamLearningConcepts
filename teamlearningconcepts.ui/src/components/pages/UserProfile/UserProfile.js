import React from 'react';
import firebase from 'firebase'
import userData from '../../../helpers/data/userData';
import './UserProfile.scss';


class UserProfile extends React.Component {

  state = {
    userProfile: []
  }

  componentDidMount() {
    var user = firebase.auth().currentUser;
    let email = '';
    
    if (user != null) {
      email = user.email;
    }
    userData.getUserByEmail(email)
    .then(userProfile => { this.setState({userProfile}) })
  }

render() {
const {userProfile} = this.state;
  return(
    <div className="UserProfile col-md-12 text-center">
      <h2>{`${userProfile.firstName} ${userProfile.lastName}'s Profile`}</h2>

        <div className="profile-container">
          <img src={userProfile.photoUrl} className="userProfileImage col-4"alt={`"${userProfile.firstName}'s Profile Pic"`}></img>
          <div className="profile-info col-12">
            <p className="profile-line-item"><span className="line-title">Profile Name:</span>{userProfile.username}</p>
            <p className="profile-line-item"><span className="line-title">First Name:</span> {userProfile.firstName}</p>
            <p className="profile-line-item"><span className="line-title">Last Name:</span> {userProfile.lastName}</p>
            <p className="profile-line-item"><span className="line-title">Email Address:</span> {userProfile.email}</p>
            <p className="profile-line-item"><span className="line-title">My auto generated SQL userId is:</span> {userProfile.userId}</p>
          </div>
        </div>
        <div>
          <button className="btn btn-dark-blue previous-orders-btn">Previous Orders</button>
        </div>
    </div>
  )
}
}

export default UserProfile 
