import React, { Component } from 'react'
import { reduxForm } from 'redux-form';
import { signIn } from '../actions/index'

class Login extends Component {
  handleFormSubmit({userName, password}){
    this.props.signIn({userName, password})
  }

  render () {
    const { handleSubmit, fields: { userName, password }} = this.props;
    return(
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset>
            <input type="text" {...userName} placeholder="Enter Username" />
          </fieldset>
          <fieldset>
            <input type="password" {...password} placeholder="Enter Password" />
          </fieldset>
          <input type='submit' name="submit" className="login-button" />
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'signinForm',
  fields: ['userName', 'password']
}, null, { signIn })(Login)


