import React, { Component } from 'react';
import { connect } from 'react-redux'
import { movieSelected } from '../actions/index'
import { truncate } from '../utilities/functions'
import playBtn from '../styles/assets/play-btn-sm.png'

class Search extends Component{
  movieSelected(movieSelected) {
    this.props.movieSelected(movieSelected)  
  }

  displayResult(result) {
    return (
      <section key={result.title} className="resultsItem flexContainerColumn">
        <section className="images imagesFilter">
          <div className="resultsPlayIcon"> <img src={playBtn} onClick={(movieSelected) => this.movieSelected(result)} /></div>
          <img className="searchResultsImg" id="search_image_result" src={result.image} onClick={(movieSelected) => this.movieSelected(result)} />
        </section>
        <section className="resultsTextContainer" >
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
        <h1 className="result_header">we found {sResults.length} movies:</h1>
        <section id="resultsList" className="centerContainer flexContainerRow">
          {sResults.map(result => this.displayResult(result.m.properties))}
        </section>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({ sResults: state.search.results })

export default connect(mapStateToProps, { movieSelected })(Search)

