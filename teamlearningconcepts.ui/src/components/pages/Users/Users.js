import React from 'react';
import customerData from '../../../helpers/data/userData';
import SingleUser from '../../shared/SingleUser/SingleUser';
import './Users.scss';



class Users extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    customerData.getAllUsers()
      .then(users => { this.setState({users}) })
  }

  render() {
    const {users} = this.state;
    const buildUserList = users.map((user) => {
      return (<SingleUser key={user.id} user={user} />)
    });

    return (
      <div className="Users">
        {buildUserList}
      </div>
    )
  }
}

export default Users;
