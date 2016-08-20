import React, { Component } from 'react'

class VoteVideoPlayer extends Component {
  constructor (props) {
    super (props) 
  }

  ratingTimeout(){
    alert("Voting for the movie" + this.props.title + "is about to close, please rate");
  }

  movieEnded (e, movie){
    e.preventDefault();
    alert("You may now vote on this movie");
    let what = document.getElementById("star-rating")
    what.style.visibility= "visible"
    return 
  }

  render() {
    return (
      <section className="voting_player_container">
        <video 
          autoPlay controls src={this.props.movie} 
          id="myVideo" type="video/mp4" 
          onEnded={e=> this.movieEnded(e, this.props.title)} />
      </section>
    );
  }
}
export default VoteVideoPlayer