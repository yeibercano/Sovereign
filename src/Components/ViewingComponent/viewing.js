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
            <section id="poster_info" className="movieImageContainer">
              <img src={selectedMovie.image} title={selectedMovie.title} alt={selectedMovie.title}/>
            </section>
            <section id="movieInfo" className="flexContainerColumn movieInfo">
              <h2 className="movieHeader">{selectedMovie.title}</h2>
              <section id="sub_movie_info">
                <section id="synopsis">
                  <h4>{selectedMovie.synopsis}</h4>
                </section>
                <h4><span className="movieSubtitle">Actors:</span> {selectedMovie.actors}</h4>
                <h4><span className="movieSubtitle">Director:</span> {selectedMovie.director}</h4>
                <h4><span className="movieSubtitle">Release:</span> {selectedMovie.year}</h4>
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


