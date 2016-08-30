import React, { Component } from 'react'
import { hashHistory } from 'react-router'

class UserLogin extends Component {
 
 handleLogin () {
   hashHistory.push('login')
 }

  render() {
    return (
      <aside className="userLogin"> 
        <h1 onClick={this.handleLogin}>login</h1>
      </aside>
    )
  }
}

export default UserLogin