import React, { Component } from 'react';
import { connect } from 'react-redux'
import { movieSelected } from '../actions/index'

class Search extends Component{
  movieSelected(movieSelected) {
    this.props.movieSelected(movieSelected)  
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
    const { sResults } = this.props;
    if (sResults.length === 0) {
      return <section className="search_not_found">Search results not found!</section>
    }

    return (
      <section>
        <section className="result_header">
          <h1>Results For Your Search: </h1>
        </section>
        {sResults.map(result=> this.displayResult(result.m.properties))}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    sResults: state.category.allMovies
  }
}

export default connect(mapStateToProps, { movieSelected })(Search)

