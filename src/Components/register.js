import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register } from '../actions/index'

class CreateAccountScreen extends Component {

  constructor (props) {
    super (props)
    this._saveAndContinue = this._saveAndContinue.bind(this)
  }
  _saveAndContinue(e) {
    e.preventDefault();
    let uInfo = {
      firstName : this.firstName.value,
      lastName : this.lastName.value,
      userName :  this.userName.value,
      password : this.password.value,
      confirmPassword :  this.confirmPassword.value,
      email : this.email.value,
      website : this.website.value,
      companyName : this.companyName.value,
      phoneNumber : this.phoneNumber.value,
      loggedIn: true
    }
    this.props.register(uInfo)
  }

  render () {
    return (
      <div className="create_account_screen">
        <div className="create_account_form">
          <h1>Create account</h1>
          <form onSubmit={this._saveAndContinue}>
            <input
              type="text"
              ref={input=> this.firstName = input} 
              require={true}
              name="firstName"
              placeholder ="Enter First Name"
             />
            <input
              type="text" 
              name="lastName"
              placeholder ="Enter Last Name"
              ref={input=> this.lastName = input}
              />
            <input
              type="text"
              name="userName" 
              placeholder ="Enter desired username"
              ref={input=> this.userName = input}
              />
            <input
              type="password" 
              name="password" 
              placeholder ="Enter Password"
              ref={input=> this.password = input}
              />
            <input
              type="password" 
              name="confirmPassword"
              placeholder ="Re-enter Password"
              ref={input=> this.confirmPassword = input} 
              />
            <input
              type="text"
              name="email" 
              placeholder ="Enter E-mail"
              ref={input=> this.email = input}
              />
            <input
              type="text" 
              name="website"
              placeholder ="Enter Your Personal Website"
              ref={input=> this.website = input} 
              />
            <input
              type="text" 
              name="companyName"
              placeholder ="Enter The Name Of Your Company"
              ref={input=> this.companyName = input}  
              />
            <input
              type="text" 
              name="phoneNumber"
              placeholder ="Enter Your Phone Number"
              ref={input=> this.phoneNumber = input} 
              />
            <input 
              type="submit" 
              name="submit"
              value="Register"
              className="register-button" />
          </form>
        </div>
      </div>
    );
  }
};
    
export default connect(null, { register })(CreateAccountScreen);


