import React, { Component } from 'react'
import Load from 'react-loading'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux'
import { movieSelected } from '../../actions/index'

class LandingPageVideoList extends Component {
  // constructor(props){
  //   super(props)
  //   // localStorage.setItem('viewerMovie', JSON.stringify({}));
  //   // this.state = {
  //   //     movieSent: null
  //   // }
  //   this.handleMovie = this.handleMovie.bind(this);
  //  }

  handleMovie(movie) {
    this.props.movieSelected(movie)
  }

  movieInfo(movieInfo) {
    if (movieInfo.rating > 2 && movieInfo.rating < 15) {
      return (
        <article key={movieInfo.image} onClick={() => this.handleMovie(movieInfo)} className="landing_page_movieInfo">
          <a href={() => this.handleMovie(movieInfo)}>
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

export default connect(null, { movieSelected })(LandingPageVideoList)


