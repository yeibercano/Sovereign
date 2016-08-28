import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../actions/index'

class Login extends Component {
  userLogin(e){
    e.preventDefault()
    this.props.signIn({
      userName: this.userName.value, 
      password: this.password.value
    })
  }

  render () {
    return(
      <div>
        <form onSubmit={this.userLogin.bind(this)}>
          <input
            type="text"
            name="userName"
            ref={input => this.userName = input} 
            placeholder="Enter Username" />
          <input
            type="password" 
            name="password"
            placeholder="Enter Password"
            ref={input => this.password = input} />
          <input 
            type="submit" 
            name="submit"
            value="Enter"
            className="login-button" />
        </form>
      </div>
    )
  }
}

export default connect(null, { signIn })(Login)


