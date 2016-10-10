import React, { Component } from 'react';
import Rating from './rating';

const VotingVideoList = ({ movie }) => {
  return (
    <section className="vote_contain">
      <section id="voting_image_viewer">
        <img src={movie.image} />
      </section>
      <section id="voting_information_viewer" className="movieInformation">
        <h3>{movie.title}</h3>
        <section id="synopsis">
          <h5>{movie.synopsis}</h5>
        </section>
        <h5><span>Actors:</span> {movie.actors}</h5>
        <h5><span>Director:</span> {movie.director}</h5>
        <h5><span>Released:</span> {movie.year || "N/A"}</h5>
      </section>
      <section id="star-rating" style={{visibility: "hidden"}}>
        <Rating  />
      </section>
    </section>
  );
}

export default VotingVideoList