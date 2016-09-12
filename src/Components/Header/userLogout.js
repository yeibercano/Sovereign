import React, { Component } from 'react'
import { connect } from 'react-redux'
import { unAuthUser } from '../../actions/index'

class UserLogout extends Component {

  render() {
    const { unAuthUser } = this.props;
    return (
      <aside className="userLogin"> 
        <h1 onClick={unAuthUser}>logout</h1>
      </aside>
    )
  }
}

export default connect(null, { unAuthUser })(UserLogout)