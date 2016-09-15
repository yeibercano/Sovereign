import React, { Component } from 'react';

class VotingVideoList extends Component {
 
  render() {
    return (
      <section className="vote_contain">
        <section id="voting_image_viewer">
          <img src={this.props.movie.image} />
        </section>
        <section id="voting_information_viewer" >
          <h2>{this.props.movie.title}</h2>
        <section id="synopsis">
          <h5>{this.props.movie.synopsis}</h5>
        </section>
          <h5>Actors:{this.props.movie.actors}</h5>
          <h5>Director: {this.props.movie.director}</h5>
          <h5>Released:{this.props.movie.year}</h5>
        </section>
      </section>
    );
  }
}

export default VotingVideoList