import React, { Component } from 'react'
import { hashHistory } from 'react-router'

class Register extends Component {
 
  render() {
    return (
      <aside class="userLogin"> 
        <h1 onClick={()=> hashHistory.push('register')}>register</h1>
      </aside>
    );
  }
}

export default Register