import React, { Component } from 'react';
import axios from 'axios';

class VotingComponent extends Component {

  constructor (props) {
    super (props)  
    this.state = {
      allMovies: null
    }
  }

  componentWillMount() {
    axios.get("/movies").then(data => {
      this.setState({ allMovies: data.data });
    });
  }

  renderImage(movie){
    return (
      <section key={movie.title} className="voting_image_container">
        <img id="voting_image" src={movie.image} />
        <h4>{movie.synopsis}</h4>
      </section>
    )
  }
  
  selectedMovie (movie) {
    this.setState({url: movie.video})
  }

  render() {

    if (this.state.allMovies === null) {
      return <div>Loading...</div>
    }

    return (
      <section>
        <h3>Movies To Be Voted On</h3>
        <section className="voting_container">
          {this.state.allMovies.map(movie => this.renderImage(movie.m.properties))}
        </section>
      </section>
    );
  }
}

export default VotingComponent

