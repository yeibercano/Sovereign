import React, { Component } from 'react'
import { connect } from 'react-redux'

class ViewingPage extends Component {
  
  render() {
    const { selectedMovie } = this.props;
    if (selectedMovie === null) {
      return <div>Loading...</div>
    }

    return (
      <section id="viewingContainer" className="flexContainerColumn">
        <h1 className="containerHeader">{selectedMovie.title}</h1>
        <section id="movieContainer" className="centerContainer flexContainerColumn">
          <section id="player">
            <video className="viewing_video" autoPlay controls src={selectedMovie.video} type="video/mp4" />
          </section>  
          <aside id="movieInfoContainer" className="flexContainerRow">
            <section id="poster_info" className="movieImage">
              <img src={selectedMovie.image} />
            </section>
            <section id="movie_info" className="flexContainerColumn movieInfo">
              <h2 className="movieHeader">{selectedMovie.title}</h2>
              <section id="sub_movie_info">
                <section id="synopsis">
                  <h4>{selectedMovie.synopsis}</h4>
                </section>
                <h4>Actors:{selectedMovie.actors}</h4>
                <h4>Director:{selectedMovie.director}</h4>
                <h4>Release:{selectedMovie.year}</h4>
              </section>
            </section>
          </aside>
        </section>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({ selectedMovie: state.movieSelected.viewerMovie })

export default connect(mapStateToProps, null)(ViewingPage)


