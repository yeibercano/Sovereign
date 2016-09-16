import React, { Component } from 'react'
import { connect } from 'react-redux'

class ViewingPage extends Component {
  
  render() {
    const { selectedMovie } = this.props;
    if (selectedMovie === null) {
      return <div>Loading...</div>
    }

    return (
      <section>
        <h1 id="viewer_title">{selectedMovie.title}</h1>
        <section >
          <video className="viewing_video" autoPlay controls src={selectedMovie.video} type="video/mp4" />
        </section>  
        <aside className="viewing_info">
            <section id="poster_info">
              <img src={selectedMovie.image} />
            </section>
            <section id="movie_info">
            <h2>{selectedMovie.title}</h2>
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
    );
  }
}

const mapStateToProps = (state) => ({ selectedMovie: state.movieSelected.viewerMovie })

export default connect(mapStateToProps, null)(ViewingPage)


