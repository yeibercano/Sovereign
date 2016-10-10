import React, { Component } from 'react';
import Rating from './rating';

const VotingVideoList = ({ movie }) => {
  return (
    <section className="vote_contain">
      <section id="voting_image_viewer">
        <img src={movie.image} />
      </section>
      <section id="voting_information_viewer" >
        <h2>{movie.title}</h2>
      <section id="synopsis">
        <h5>{movie.synopsis}</h5>
      </section>
        <h5>Actors:{movie.actors}</h5>
        <h5>Director: {movie.director}</h5>
        <h5>Released:{movie.year}</h5>
      </section>
      <section id="star-rating" style={{visibility: "hidden"}}>
        <Rating  />
      </section>
    </section>
  );
}

export default VotingVideoList