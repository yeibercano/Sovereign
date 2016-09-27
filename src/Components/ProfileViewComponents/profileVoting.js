import React, {Component} from 'react'
import { connect } from 'react-redux'
import { movieSelected, getMovies } from '../../actions/index'

class VotingComponent extends React.Component {

  onClickHandler (e, movie){
    e.preventDefault();
    this.props.movieSelected(movie, 'vote')
  }

  renderImage(movie) {
    const { userInfo } = this.props;
    const currentUser = userInfo.userName;

    if(currentUser !== movie.userName){
      if(!movie.voters.includes(currentUser) && movie.category.length !== 0) {
        return (
          <section className="profile_tobevoted">
            <img id="voting_image" className="imagesFilter" src={movie.image} onClick={e => this.onClickHandler(e, movie)} />
            <section className="profile_voting_information">
              <h3>{movie.title}</h3>
              <h5>{movie.synopsis}</h5>
            </section>
          </section>
        )
      }
    }
  }

  render() {
    const { allMovies, getMovies } = this.props;

    if (allMovies.length === 0 || allMovies === null) {
      getMovies()
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

export default connect(mapStateToProps, { movieSelected, getMovies })(VotingComponent)

            

        
