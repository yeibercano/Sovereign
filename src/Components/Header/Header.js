import React, { Component } from 'react'
import Brand      from './Brand'
import SearchBar  from './SearchBar'
import UserLogin  from './UserLogin'
import UserLogout from './userLogout'
import UserProfile from './userProfile'
import Register from './userRegister'

//Parent component of Header
class Header extends Component {
 
  render() {

    let user = JSON.parse(localStorage.getItem('user')) || undefined;
    let style = {};
    let hide = {}
    if(user === undefined){
      style.display = "none"
    } else {
      hide.display = "none"
    }

    return (
      <header className="headerBackground">
        <div className="headerWrapper">
          <Brand />
          <SearchBar />
          <div style= {style} className="showBlock">
            <UserProfile />
          </div>
          <div style={hide} className="showBlock">
            <Register />
          </div>
          <div style={hide} className="showBlock">
            <UserLogin />
          </div>
          <div style= {style} className="showBlock">
            <UserLogout />
          </div>
        </div> 
      </header >
    )
  }
}

export default Header