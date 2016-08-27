import React, { Component } from 'react'
import { hashHistory } from 'react-router'

class UserLogout extends Component {

  logout(e) {
    e.preventDefault();
    localStorage.removeItem("user");
    hashHistory.push('home')
  }
 
  render() {
    return (
      <aside className="userLogin"> 
        <h1 onClick={this.logout}>logout</h1>
      </aside>
    )
  }
}

export default UserLogout