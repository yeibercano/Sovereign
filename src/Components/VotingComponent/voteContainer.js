import React, { Component } from 'react';
import VoteVideoPlayer from './votingPlayer';
import VoteVideoList from './votingVideoList';
import { connect } from 'react-redux'

// this is the parent component 
class VoteContainer extends Component {

   render() {
    const { movieSelected } = this.props;
    if (movieSelected === null) {
      return <div>Loading...</div>
    }

    return (
      <section className="flexContainerRow centerContainer">
        <VoteVideoList movie={movieSelected} />
        <VoteVideoPlayer movie= {movieSelected.video} title = {movieSelected.title}/>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({ movieSelected: state.movieSelected.viewerMovie })

export default connect(mapStateToProps, null)(VoteContainer)