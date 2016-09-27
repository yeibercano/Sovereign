import React, { Component } from 'react'
import { Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap'

class ProfileVideoList extends Component {
 
  videoInfo(videoInfo) {
    const { selectedMovie } = this.props;
    return (
      <Carousel.Item className="list-item-container" key={videoInfo.title}>
        <img id="mini_carousel" src={videoInfo.image} onClick={()=> selectedMovie(videoInfo)}/>
        <Carousel.Caption>
          <h3>{videoInfo.title}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    )
  }
  render() {
    if (this.props.moviesList === '') {
      return <section id="not_upload">You have not Uploaded Any Movies...</section>
    }
    const { moviesList } = this.props;
    return (
      <section>
        <h1 className="upload_list_title">Your Movies</h1>
        <Carousel className="profile_video_list">
          { moviesList.map(movie => this.videoInfo(movie.m.properties))}
        </Carousel>
      </section>
    );
  }
}
export default ProfileVideoList