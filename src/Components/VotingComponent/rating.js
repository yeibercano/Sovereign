import React, { Component } from 'react';
import ReactStars from 'react-stars';
import { connect } from 'react-redux'
import { voting } from '../../actions/index'
 
class Rating extends Component {
  ratingChanged(vote) {
    const { user, movieSelected } = this.props;
    this.props.voting({ 
      rating:vote, 
      title: movieSelected.title, 
      voter: user.userName 
    })
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

const mapStateToProps = (state) => ({ user: state.authUser.authUser })

export default connect(mapStateToProps, { voting })(Rating)


