import React, { Component } from 'react'
import { register } from '../actions/index'
import { reduxForm } from 'redux-form'

class CreateAccountScreen extends Component {

  handleFormSubmit(user){
    this.props.register(user)
  }

  handleErrors(displayError) {
    return (
      <div className="registerErrorMes">{displayError}</div>
    )
  }

  render () {
    const { handleSubmit, fields: { 
      firstName, 
      lastName, 
      userName, 
      password, 
      confirmPassword, 
      email, 
      website, 
      companyName, 
      phoneNumber }} = this.props;

    return (
      <div className="create_account_screen">
        <div className="create_account_form">
          <h1>Create account</h1>
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <input type="text" {...firstName} placeholder="Enter First Name" require={true} />
            <input type="text" {...lastName} placeholder ="Enter Last Name" />
            <input type="text" {...userName} placeholder ="Enter desired username" />
            <input type="password" {...password} placeholder ="Enter Password" />
            { password.touched && password.error && this.handleErrors(password.error) }
            <input type="password" {...confirmPassword} placeholder ="Re-enter Password" />
            <input type="text" {...email} placeholder ="Enter E-mail" />
            <input type="text" {...website} placeholder="Enter Your Personal Website" />
            <input type="text" {...companyName} placeholder ="Enter The Name Of Your Company" />
            <input type="text" {...phoneNumber} placeholder="Enter Your Phone Number" />
            <input type="submit" value="Register" className="register-button" />
          </form>
        </div>
      </div>
    );
  }
};

function validate(formProps) {
  const errors = {};
  if (formProps.password !== formProps.confirmPassword) {
    errors.password = 'Passwords must match'
  }
  return errors
}    

export default reduxForm({
  form: 'registerForm',
  fields: ['firstName', 'lastName', 'userName', 'password', 'confirmPassword', 'email', 'website' ,'companyName','phoneNumber'],
  validate
}, null, { register })(CreateAccountScreen);


