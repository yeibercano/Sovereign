import React, { Component } from 'react'
import { hashHistory } from 'react-router'

class UserLogin extends Component {
 
  render() {
    return (
      <aside className="userLogin"> 
        <h1 onClick={ ()=> hashHistory.push('login')}>login</h1>
      </aside>
    )
  }
}

export default UserLogin