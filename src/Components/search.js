import React, { Component } from 'react';
import { hashHistory } from 'react-router';

class Search extends Component{

  constructor(props){
    super (props);
      let searchResults = localStorage.getItem('searchResults');
      searchResults = JSON.parse(searchResults);
    this.state = {
      sResults: searchResults 
    }
  }

  componentWillReceiveProps() {
    let searchResults = localStorage.getItem('searchResults');
    searchResults = JSON.parse(searchResults);
    this.setState({sResults: searchResults})
    // return true;
  }

  movieSelected(movieSelected) {
    localStorage.setItem('viewerMovie', JSON.stringify(movieSelected));
    hashHistory.push('viewer')  
  }

  displayResult(result) {
    return (
      <section key={result.title} onClick={(movieSelected) => this.movieSelected(result)} className="searchResults">
        <section className="search-item-title-container" >
          <h3 id="search_title">{result.title}</h3>
        </section>
        <section className="search-item-container" >
          <img id="search_image_result" src={result.image} />
        </section>
      </section>
    );
  }

  render () {
    if (this.state.sResults.length === 0) {
      return <section className="search_not_found">Search results not found!</section>
    }

    return (
      <section>
        <section className="result_header">
          <h1>Results For Your Search: </h1>
        </section>
        {this.state.sResults.map(result=> this.displayResult(result.m.properties))}
      </section>
    );
  }
}

export default Search

