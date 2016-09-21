import React, { Component } from 'react';
import { search } from '../../actions/index'
import { connect } from 'react-redux'
import searchIcon from '../../styles/assets/search-icon-sm.png'

class SearchBar extends Component {
  searchTerm (e) {
    let searchedItem = e;
    localStorage.setItem('searchTerm', searchedItem);
  }

  submitSearch (e) {
    e.preventDefault();
    let searchedItem = localStorage.getItem('searchTerm');
    this.props.search(searchedItem)
  }
 
  render() {
    return (
      <form className="searchBar">
        <input 
          name="search" className="inputSearch" placeholder="ex: Mojave"
          onChange={event => this.searchTerm(event.target.value)} 
        />
        <button 
          onClick= {this.submitSearch.bind(this)}
          type="submit"
          className="search_button">
          <img id="search_button_img" src={searchIcon} />
        </button>
      </form>
    );
  }
}

export default connect(null, { search })(SearchBar)

