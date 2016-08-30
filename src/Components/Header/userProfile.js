import React, { Component } from 'react'
import { hashHistory } from 'react-router'

class UserProfile extends Component {
 
 handleProfile () {
   hashHistory.push('profile')
 }

  render() {
    return (
      <aside className="userLogin"> 
        <h1 onClick={this.handleProfile}>profile</h1>
      </aside>
    );
  }
}

export default UserProfile