import React, { Component } from 'react';
import ReactStars from 'react-stars';
import { hashHistory } from 'react-router';
import axios from 'axios';
 
class Rating extends Component {
  constructor() {
    super();
    let movieSelected = localStorage.getItem('viewerMovie')
    movieSelected = JSON.parse(movieSelected);
    let user = localStorage.getItem('user')
    user = JSON.parse(user);

    this.state = {
      rating: 1, 
      title: movieSelected.title, 
      voter: user.userName
    };
    this.ratingChanged = this.ratingChanged.bind(this);
  }
  ratingChanged(vote) {
    this.setState({rating: vote}, function(){   
      axios.post('/movies/rating', { rating: this.state.rating, title: this.state.title, voter: this.state.voter });
      hashHistory.push("profile");
    });
  }

  render() {
    const { rating } = this.state;
    return (                
      <section className="stars">
        <ReactStars
          count={5}
          onChange={vote=>this.ratingChanged(vote)}
          size={24} 
          color2={'#ffd700'} />
      </section>
    );
  }
}
export default Rating


