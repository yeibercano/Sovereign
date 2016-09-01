import React, { Component } from 'react'
import Load from 'react-loading'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux'

class LandingPageVideoList extends Component {
  constructor(props){
    super(props)
    localStorage.setItem('viewerMovie', JSON.stringify({}));
    this.state = {
        movieSent: null
    }
    this.movieSelected = this.movieSelected.bind(this);
   }

  movieSelected(movieSelected) {
    localStorage.setItem('viewerMovie', JSON.stringify(movieSelected));
    hashHistory.push('viewer')  
  }

  movieInfo(movieInfo) {
    if (movieInfo.rating > 2 && movieInfo.rating < 15) {
      return (
        <article key={movieInfo.image} onClick={(movieSelected) => this.movieSelected(movieInfo)} className="landing_page_movieInfo">
          <a href={(movieSelected) => this.movieSelected(movieInfo)}>
            <img className="landing_page_movieInfo_image"src={movieInfo.image} /> 
          </a>
        </article>
      );
    }
  }

  render() {
    if (this.props.allMovies === null) return <Load />

    return (
      <div>
        <h2>Featured Movies</h2>
        <section className="landing_page">
          {this.props.allMovies.map(movie => this.movieInfo(movie.m.properties))}
        </section>
      </div>
    );
  }

}

export default LandingPageVideoList


