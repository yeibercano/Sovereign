import React, { Component } from 'react'
import LandingPageVideoList from './landingPageVideoList'
import LandingPageVideoPlayer from './landingPageVideoPlayer'
import { connect } from 'react-redux';
import { getMovies } from '../../actions/index'

class LandingPage extends Component {
  
  componentWillMount() {
    this.props.getMovies();
  }
 
  render() {
    const { allMovies } = this.props;

    return (
      <main> 
        <LandingPageVideoPlayer allMovies ={allMovies} />
        <section className="videoListWrapper">
          <LandingPageVideoList allMovies ={allMovies} />
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({ allMovies: state.movies.allMovies })

export default connect(mapStateToProps, { getMovies })(LandingPage);