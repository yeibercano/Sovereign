import React, {Component} from 'react'
import ProfileVideoList from './profileVideoList'
import axios from 'axios'

import { connect } from 'react-redux'
import { userLastMovie } from '../../actions' 

class ProfileVideoPlayer extends Component {
  constructor (props) {
    super (props)  
    this.state = {
      url: "",
      allMovies: ""
    }
  }
  componentWillMount() {
    const { userInfo } = this.props;
    this.props.userLastMovie(userInfo);
    // axios.get("/movies/user", {params: {userName: this.props.userInfo.userName}}).then(data => {
    //   this.setState({ url: data.data[data.data.length-1].m.properties.video, allMovies: data.data });
    // });
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

