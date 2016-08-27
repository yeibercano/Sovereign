import React, { Component } from 'react';
import { hashHistory, Link } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux'
import { getCategory } from '../../actions/index'

class Brand extends Component {

  selectedItem(category) {
   this.props.getCategory(category);
  }
 
  render() {
    return (
      <nav className="brand"> 
        <Link to='/home'>
          <h1>Sovereign</h1>
        </Link>
        <div className="dropdown menu"> 
          <button className="dropbtn dropdown menu">categories</button>
          <div className="dropdown-content">
            <a value="action" onClick={ () => this.selectedItem('action')}>action</a>
            <a value="adventure" onClick={()=> this.selectedItem('adventure')}>adventure</a>
            <a value="comedy" onClick={()=> this.selectedItem('comedy')}>comedy</a>
            <a value="drama" onClick={()=> this.selectedItem('drama')}>drama</a>
            <a value="dark humor" onClick={()=> this.selectedItem('dark humor')}>dark humor</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect(null, { getCategory })(Brand)

