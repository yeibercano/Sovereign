import React, { Component } from 'react';
import VoteVideoPlayer from './votingPlayer';
import VoteVideoList from './votingVideoList';
import Rating from './rating';
import { connect } from 'react-redux'

// this is the parent component 
class VoteContainer extends Component {

   render() {
    const { movieSelected } = this.props;
    if (movieSelected === null) {
      return <div>Loading...</div>
    }

    return (
      <section className="voting_page_container">
        <VoteVideoPlayer movie= {movieSelected.video} title = {movieSelected.title}/>
        <VoteVideoList movie={ movieSelected } />
        <section id="star-rating" style={{visibility: "hidden"}}>
          <Rating  />
        </section>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({ movieSelected: state.movieSelected.viewerMovie })

export default connect(mapStateToProps, null)(VoteContainer)