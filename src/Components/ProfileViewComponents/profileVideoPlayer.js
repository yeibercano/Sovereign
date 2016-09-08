import React, {Component} from 'react'
import ProfileVideoList from './profileVideoList'
import { connect } from 'react-redux'
import { userLastMovie } from '../../actions' 

class ProfileVideoPlayer extends Component {
  componentWillMount() {
    const { userInfo } = this.props;
    this.props.userLastMovie(userInfo.userName);
  }
  selectedMovie (movie) {
    this.setState({url: movie.video})
  }
  render() {
    const { allMovies, url } = this.props;
    return (
      <section className="profile_video_player">
        <video controls src={url} type="video/mp4" />
         <ProfileVideoList 
          selectedMovie = {(selectedMovie) => this.selectedMovie(selectedMovie)}
          moviesList = {allMovies} />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { 
    url: state.last.url, 
    allMovies: state.last.allMovies
  } 
}

export default connect(mapStateToProps, { userLastMovie })(ProfileVideoPlayer)

