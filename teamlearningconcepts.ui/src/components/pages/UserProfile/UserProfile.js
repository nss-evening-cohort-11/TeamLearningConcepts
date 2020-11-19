import React from 'react';
import firebase from 'firebase'
import userData from '../../../helpers/data/userData';
import authData from '../../../helpers/data/authData';
import './UserProfile.scss';


class UserProfile extends React.Component {

  state = {
    userProfile: []
  }

  componentDidMount() {

    var user = firebase.auth().currentUser;
    let email = '';
    let uid = '';
    
    if (user != null) {
      email = user.email;
      uid = user.uid;
    }

    console.log(`authed User's email: ${email}`);
    console.log(`authed User's uid: ${uid}`);



    userData.getUserByEmail(email)
    .then(userProfile => { this.setState({userProfile}) })

    // const uid = authData.getUid();

    // console.log(`uid, ${uid}`)
  }

render() {
  
const {userProfile} = this.state;
  return(
    <div className="UserProfile">
  <h2>{`${userProfile.firstName} ${userProfile.lastName}'s Profile`}</h2>
  <img src={userProfile.photoUrl} alt={`"${userProfile.firstName}'s Profile Pic"`}></img>
  <h6>My auto generated SQL userId is: {userProfile.userId}</h6>

  <button className="btn btn-warning">Previous Orders</button>
    </div>
  )
}
}

export default UserProfile 
