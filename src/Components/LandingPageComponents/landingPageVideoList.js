import React, { Component } from 'react'
import Load from 'react-loading'
import { connect } from 'react-redux'
import { movieSelected } from '../../actions/index'
import playBtn from '../../styles/assets/play-btn-sm.png'

class LandingPageVideoList extends Component {

  handleMovie(movie) {
    this.props.movieSelected(movie)
  }
  handleMovieSynopsis(synopsis) {
    return `${synopsis.substring(0, 80)}...`
  }

  movieInfo(movieInfo) {
    if (movieInfo.rating > 2 && movieInfo.rating < 15) {
      return (
        <article key={movieInfo.image}  className="landing_page_movieInfo">
          <div className="featurePlayIcon"> <img src={playBtn} onClick={e => this.handleMovie(movieInfo)} /></div>
          <img className="landing_page_movieInfo_image imagesFilter" onClick={e => this.handleMovie(movieInfo)} src={movieInfo.image} /> 

          <section className="feature_movie_information">
            <h3>{movieInfo.title}</h3>
            <h5>{this.handleMovieSynopsis(movieInfo.synopsis)}</h5>
          </section>
        </article>
      );
    }
  }

  render() {
    const { allMovies } = this.props;
    if (allMovies === null) return <Load />

    return (
      <div>
        <h2>Featured Movies</h2>
        <section className="landing_page">
          {allMovies.map(movie => this.movieInfo(movie.m.properties))}
        </section>
      </div>
    );
  }

}

export default connect(null, { movieSelected })(LandingPageVideoList)


