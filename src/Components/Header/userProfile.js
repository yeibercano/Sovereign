import React, { Component } from 'react'
import { hashHistory } from 'react-router'

class UserProfile extends Component {
 
  render() {
    return (
      <aside className="userLogin"> 
        <h1 onClick={()=> hashHistory.push('profile')}>profile</h1>
      </aside>
    );
  }
}

export default UserProfile