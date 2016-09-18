import React, { Component } from 'react'
import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video';
import { Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap'
import { hashHistory } from 'react-router'
import ViewingPage from '../ViewingComponent/viewing'
import { connect } from 'react-redux'
import { movieSelected } from '../../actions/index'

//retrieve the videos from the user and display them 
// when clicked, they play in the ProfilePlayer
class LandingPageVideoPlayer extends Component {

  onMouseOverHandler() {
    document.getElementById("play_img").style.visibility = "visible";
  }
  onMouseLeaveHandler() {
    document.getElementById("play_img").style.visibility = "hidden";
  }

  onClickHandler (e, movieProps) {
    e.preventDefault();
    movieSelected(movieProps)
  }

  renderImage(mov) {
    let movie = mov.m.properties;

    if (movie.rating > 15) {
      return (
        <CarouselItem  key={movie.image} onMouseEnter={this.onMouseOverHandler}>
          <img id="play_img" src="../../../styles/assets/play-btn.png" onMouseLeave={this.onMouseLeaveHandler} onClick={e => this.onClickHandler(e, movie)} />
          <img id="carousel-img" onClick={e => this.onClickHandler(e, movie)} src={movie.image}/>
            <Carousel.Caption id="carousel-caption">
              <h2 id='title-caption'>{movie.title}</h2>
              <h4 id='synopsis-caption'>{movie.synopsis}</h4>
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

export default LandingPageVideoPlayer

