import React, { Component } from 'react'
import axios from 'axios'
import { hashHistory } from 'react-router'

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

  axios.post('/users/login',userLogin )
    .then(function(response){
      if(response.data.status === 401) {
        alert('wrong password')
      }
      localStorage.setItem('user', JSON.stringify(response.data))
    }).then(function() {
      hashHistory.push('home')
    }).catch(function(err){
      if (err ) throw err
    });
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

export default Login


