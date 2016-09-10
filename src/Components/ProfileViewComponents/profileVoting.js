import React, {Component} from 'react'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux'
var axios = require('axios');

class VotingComponent extends React.Component {

  // constructor (props) {
  //   super (props)  
  //   this.state = {
  //     allMovies: null
  //   }
  //  }

  // componentWillMount() {
  //   axios.get("/movies/profile").then(data => {
  //     this.setState({ allMovies: data.data });
  //   });
  // }
  onClickHandler (e, movie){
    e.preventDefault();
    localStorage.setItem('viewerMovie', JSON.stringify(movie));
    hashHistory.push("vote");
  }

  renderImage(movie) {
    const { userInfo } = this.props;
    const currentUser = userInfo.userName;

    if(currentUser !== movie.userName){
      if(!movie.voters.includes(currentUser)){
        return (
          <section className="profile_tobevoted">
            <img id="voting_image" src={movie.image} onClick={e => this.onClickHandler(e, movie)}/>
            <section className="profile_voting_information">
              <h3>{movie.title}</h3>
              <h5>{movie.synopsis}</h5>
            </section>
          </section>
        )
      }
    }
// }
  }

  selectedMovie (movie) {
    this.setState({url: movie.video})
  }

  render() {
    const { allMovies } = this.props;
    if (allMovies === null) {
      return <div>Loading...</div>
    }
    
    return (
      <section className="parent_voting_container">
      <h3 id="profile_voting_list_title">Movies to be voted on</h3>
        <section className="voting_container">
          {allMovies.map(movie => this.renderImage(movie.m.properties))}
        </section>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    allMovies: state.movies.allMovies
  }
}

export default connect(mapStateToProps, null)(VotingComponent)

            

        
