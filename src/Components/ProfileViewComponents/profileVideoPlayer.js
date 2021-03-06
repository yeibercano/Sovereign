import React, { Component } from 'react'
import ProfileVideoList from './profileVideoList'
import { connect } from 'react-redux'
import { userMovies, userMoviesSelected } from '../../actions' 
import UploadVideos from './uploadVideo'

class ProfileVideoPlayer extends Component {
  
  componentWillMount() {
    const { userInfo } = this.props;
    this.props.userMovies(userInfo.userName);
  }
  selectedMovie (movie) {
    this.props.userMoviesSelected(movie)
  }
  render() {
    const { allMovies, url } = this.props;
    return (
      <section className="profile_video_player">
        <video controls src={url} type="video/mp4" />
        <ProfileVideoList 
          selectedMovie = {(selectedMovie) => this.selectedMovie(selectedMovie)}
          moviesList = {allMovies} />
        <UploadVideos />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({ 
  url: state.userMovies.recentMovieUrl, 
  allMovies: state.userMovies.userMovies
})

export default connect(mapStateToProps, { userMovies, userMoviesSelected })(ProfileVideoPlayer)

