import React, { Component } from 'react';
import { connect } from 'react-redux'
import { movieSelected } from '../actions/index'
import { truncate } from '../utilities/functions'

class Search extends Component{
  movieSelected(movieSelected) {
    this.props.movieSelected(movieSelected)  
  }

  displayResult(result) {
    return (
      <section key={result.title} className="resultsItem flexContainerColumn">
        <section className="search-item-container" >
          <img className="searchResultsImg imagesFilter" id="search_image_result" src={result.image} onClick={(movieSelected) => this.movieSelected(result)} />
        </section>
        <section className="search-item-title-container" >
          <h3 id="search_title">{result.title}</h3>
          <h5 >{truncate(result.synopsis)}</h5>
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
      <section id="resultsContainer">
        <h1 className="result_header">Results For Your Search: </h1>
        <section className="resultsList centerContainer flexContainerRow">
          {sResults.map(result => this.displayResult(result.m.properties))}
        </section>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({ sResults: state.search.results })

export default connect(mapStateToProps, { movieSelected })(Search)

