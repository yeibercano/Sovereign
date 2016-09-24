import React, { Component } from 'react'
import Footer from './footer'
import Header from './Header/Header'

class App extends Component {
  render() {
    return (
      <section className="appContainer">
        <Header />
        <section className="wrapper">
          {this.props.children}
        </section>
        <Footer />
      </section>
    );
  }
}

export default App;
