import React, { Component } from 'react'
import axios from 'axios'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux'
import { signIn } from '../actions/index'


// var  local = JSON.parse(localStorage.getItem('u'))
// let token = local.token;
// axios.defaults.headers.common['Authorization'] =  token;
// console.log('token:', token)
class Login extends React.Component {

  constructor (props) {
    super (props)  
      let userLS = localStorage.getItem('user');
      //parses the info brought down (object)
      let parseUser = JSON.parse(userLS);
    this._userLogin = this._userLogin.bind(this);
    this.state = {
     user: parseUser,
      test: ""
    }
   }
    
  _userLogin(e){
    e.preventDefault();
    let userLogin = {
      userName: this.userName.value,
      password: this.password.value
    }
    this.props.signIn(userLogin)
  }

  render () {
    return(
      <div>
        <form onSubmit={this._userLogin} >
          <input
            type="text"
            name="userName"
            ref={input=> this.userName = input} 
            placeholder ="Enter Username"/>
          <input
            type="password" 
            name="password"
            placeholder ="Enter Password"
            ref={input=> this.password = input}/>
          <input 
            type="submit" 
            name="submit"
            value="Enter"
            className="login-button" />
        </form>
      </div>
    );
  }
}

export default connect(null, { signIn }) (Login)


