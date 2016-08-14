import React, { Component } from 'react'
import LandingPageVideoList from './landingPageVideoList'
import LandingPageVideoPlayer from './landingPageVideoPlayer'
import axios from 'axios'
import { connect } from 'react-redux';
import { getMovies } from '../../actions/index'

class LandingPage extends Component {

  constructor (props) {
    super (props) 
    this.state = {
      allMovies: null
    }  
  }

  componentWillMount() {
    this.props.getMovies();
    // axios.get("/movies").then(data => {
    //   this.setState( { allMovies: data.data } );
    // });
  }
  
  selectedMovie(movie) {
   // console.log('this is the movie selected!');
  }

  render() {
    const { allMovies } = this.props;

    return (
      <main> 
        <LandingPageVideoPlayer allMovies = {allMovies} />
        <section className="videoListWrapper">
          <LandingPageVideoList 
            selectedMovie = {(selectedMovie) => this.selectedMovie(selectedMovie)}
            allMovies = {allMovies} />
        </section>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return { allMovies: state.list }
}

export default connect(mapStateToProps, { getMovies })(LandingPage);