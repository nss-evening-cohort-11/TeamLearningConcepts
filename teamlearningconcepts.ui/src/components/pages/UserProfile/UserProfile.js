import React from 'react';
import userData from '../../../helpers/data/userData';
import './UserProfile.scss';


class UserProfile extends React.Component {

  state = {
    userProfile: []
  }

  componentDidMount() {
    userData.getSingleUser()
    .then(userProfile => { this.setState({userProfile}) })
  }

render() {
  // const {users} = this.state;
  // const buildUserProfile = userProfile.map((user) => {
    // return user
  // })
  return(
    <div className="UserProfile">
      <h1>This is the UserProfile component</h1>
    </div>
  )
}
}

export default UserProfile 
