import React, { Component } from 'react';
import ReactStars from 'react-stars';
import { hashHistory } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux'
import { voting } from '../../actions/index'
 
class Rating extends Component {
  // constructor() {
  //   super();
  //   let movieSelected = localStorage.getItem('viewerMovie')
  //   movieSelected = JSON.parse(movieSelected);
  //   let user = localStorage.getItem('user')
  //   user = JSON.parse(user);

  //   this.state = {
  //     rating: 1, 
  //     title: movieSelected.title, 
  //     voter: user.userName
  //   };
  //   this.ratingChanged = this.ratingChanged.bind(this);
  // }
  ratingChanged(vote) {
    const { user, movieSelected } = this.props;
    this.props.voting({ 
      rating:vote, 
      title: movieSelected.title, 
      voter: user.userName 
    })
    // this.setState({rating: vote}, function(){   
    //   axios.post('/movies/rating', { rating: this.state.rating, title: this.state.title, voter: this.state.voter });
    //   hashHistory.push("profile");
    // });
  }

  render() {

    return (                
      <section className="stars">
        <ReactStars
          count={5}
          onChange={vote => this.ratingChanged(vote)}
          size={24} 
          color2={'#ffd700'} />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.authUser.authUser
  }
}
export default connect(mapStateToProps, { voting })(Rating)


