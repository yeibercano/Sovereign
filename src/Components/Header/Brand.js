import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux'
import { getCategory } from '../../actions/types'

//this component is for the Logo/Brand
class Brand extends Component {

  selectedItem(item) {
   this.props.getCategory(item);
  }
 
  render() {
    return (
      <nav className="brand"> 
        <h1 onClick={ ()=> hashHistory.push('home')}>Sovereign
        </h1>
        <div className="dropdown menu"> 
          <button className="dropbtn dropdown menu">
            categories
          </button>
          <div className="dropdown-content">
            <a value="action" onClick={(value)=> this.selectedItem('action')}>action</a>
            <a value="adventure" onClick={(value)=> this.selectedItem('adventure')}>adventure</a>
            <a value="comedy" onClick={(value)=> this.selectedItem('comedy')}>comedy</a>
            <a value="drama" onClick={(value)=> this.selectedItem('drama')}>drama</a>
            <a value="dark humor" onClick={(value)=> this.selectedItem('dark humor')}>dark humor</a>
          </div>
        </div>
      </nav>
    );
  }
}


export default connect(null, { getCategory })(Brand)

