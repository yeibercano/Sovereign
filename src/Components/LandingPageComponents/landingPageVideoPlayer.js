import React, { Component } from 'react'
import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video';
import { Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap'
import { hashHistory } from 'react-router'
import ViewingPage from '../ViewingComponent/viewing'
import { connect } from 'react-redux'
import { movieSelected } from '../../actions/index'
import playBtn from '../../styles/assets/play-btn-sm.png'

//retrieve the videos from the user and display them 
// when clicked, they play in the ProfilePlayer
class LandingPageVideoPlayer extends Component {

  onClickHandler (e, movieProps) {
    e.preventDefault();
    this.props.movieSelected(movieProps)
  }
  handleMovieSynopsis(synopsis) {
    return `${synopsis.substring(0, 60)}...`
  }

  renderImage(mov) {
    let movie = mov.m.properties;

    if (movie.rating > 15) {
      return (
        <CarouselItem  key={movie.image} >
         <div className="play_img"> <img src={playBtn} onClick={e => this.onClickHandler(e, movie)} /></div>
          <img id="carousel-img" onClick={e => this.onClickHandler(e, movie)} src={movie.image}/>
            <Carousel.Caption id="carousel-caption">
              <h2 id='title-caption'>{movie.title}</h2>
              <h4 id='synopsis-caption'>{this.handleMovieSynopsis(movie.synopsis)}</h4>
            </Carousel.Caption>
        </CarouselItem>
      )
    }
  }

  render() {
    const { allMovies } = this.props;
    if (allMovies === null) {
      return ( <div>Loading...</div> );
    }

    return (
      <section className="carousel-div">
        <Carousel >
          { allMovies.map( movie => this.renderImage(movie))}
        </Carousel>
        <section style={{display: "none"}}>
        <ViewingPage />
        </section>
      </section>
    );
  }
}

export default connect(null, { movieSelected })(LandingPageVideoPlayer)

