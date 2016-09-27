import React, { Component } from 'react'
import Load from 'react-loading'
import { connect } from 'react-redux'
import { movieSelected } from '../../actions/index'
import playBtn from '../../styles/assets/play-btn-sm.png'

class LandingPageVideoList extends Component {

  handleMovie(movie) {
    this.props.movieSelected(movie)
  }

  movieInfo(movieInfo) {
    if (movieInfo.rating > 2 && movieInfo.rating < 15) {
      return (
        <article key={movieInfo.image} onClick={() => this.handleMovie(movieInfo)} className="landing_page_movieInfo">
        <div className="featureButton"> <img src={playBtn} onClick={e => this.onClickHandler(e, movie)} /></div>
          <a href={() => this.handleMovie(movieInfo)}>
            <img className="landing_page_movieInfo_image imagesFilter" src={movieInfo.image} /> 
          </a>
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


