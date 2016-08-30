import React, { Component } from 'react'
import { hashHistory } from 'react-router'

class Register extends Component {
 
	handleRegister () {
		hashHistory.push('register')
	}

  render() {
    return (
      <aside className="userLogin"> 
        <h1 onClick={this.handleRegister}>register</h1>
      </aside>
    );
  }
}

export default Register