import React, { Component } from 'react';
import { connect } from 'react-redux';

class VotingComponent extends Component {

  renderImage (movie) {
    return (
      <section key={movie.title} className="voting_image_container">
        <img id="voting_image" src={movie.image} />
        <h4>{movie.synopsis}</h4>
      </section>
    )
  }

  render () {
    const { allMovies } = this.props;
    if (allMovies === null) {
      return <div>Loading...</div>
    }

    return (
      <section>
        <h3>Movies To Be Voted On</h3>
        <section className="voting_container centerContainer">
          {this.state.allMovies.map(movie => this.renderImage(movie.m.properties))}
        </section>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({ allMovies: state.movies.allMovies })

export default connect(mapStateToProps, null)(VotingComponent)

