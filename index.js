import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import LandingPage from './src/Components/LandingPageComponents/landingPage'
import Viewer from './src/Components/ViewingComponent/viewing'
import Voting from './src/Components/VotingComponent/voteContainer'
import Login from './src/Components/login'
import CreateAccountScreen from './src/Components/register'
import Profile from './src/Components/ProfileViewComponents/profile'
import UploadNewVideo from './src/Components/ProfileViewComponents/uploadNewVideo'
import Search from './src/Components/search'
import Footer from './src/Components/footer'
import Header from './src/Components/Header/Header'

const Home = React.createClass({
  
  render() {
    return (
      <div>
        <LandingPage />
      </div>
      );
  }})
const Register = React.createClass({
  render() {
    return (
      <div>
        <CreateAccountScreen />
      </div>
      );
  }})
const LoginPage = React.createClass({
  render() {
    return (
      <div>
        <Login />
      </div>
      );
  }})
const ProfileUser = React.createClass({
  render() {
    return (
      <div>
        <Profile />
      </div>
      );
  }})
const ViewerPlayer = React.createClass({
  render() {
    return (
      <div>
        <Viewer/>
      </div>
      );
  }})
const VotingPlayer = React.createClass({
  render() {
    return (
      <div>
        <Voting />
      </div>
      );
  }})
const SearchResults = React.createClass({
  render() {
    return (
      <div>
        <Search />
      </div>
      );
  }})
const App = React.createClass({  
  render() {
    return (
      <section>
        <Header />
          <section className="wrapper">
            {this.props.children}
          </section>
        <Footer />
      </section>
    )
  }
})
render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home}/>
      <Route path="viewer" component={ViewerPlayer} />
      <Route path="vote" component={VotingPlayer} />
      <Route path="register" component={Register} />
      <Route path="login" component={LoginPage} />
      <Route path="profile" component={ProfileUser} />
      <Route path="NewVideo" component={UploadNewVideo} />
      <Route path="search" component={SearchResults} />
    </Route>
  </Router>
, document.getElementById('app'))
        
// import React, { Component } from 'react'
// import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
// import { render } from 'react-dom'

// import LandingPage from './src/Components/LandingPageComponents/landingPage'
// import Viewer from './src/Components/ViewingComponent/viewing'
// import Voting from './src/Components/VotingComponent/voteContainer'
// import Login from './src/Components/login'
// import CreateAccountScreen from './src/Components/register'
// import Profile from './src/Components/ProfileViewComponents/profile'
// import UploadNewVideo from './src/Components/ProfileViewComponents/uploadNewVideo'
// import Search from './src/Components/search'
// import Footer from './src/Components/footer'
// import Header from './src/Components/Header/Header'

// const Home = React.createClass({
  
//   render() {
//     return (
//       <div>
//         <LandingPage />
//       </div>
//       );
//   }})
// const Register = React.createClass({
//   render() {
//     return (
//       <div>
//         <CreateAccountScreen />
//       </div>
//       );
//   }})
// const LoginPage = React.createClass({
//   render() {
//     return (
//       <div>
//         <Login />
//       </div>
//       );
//   }})
// const ProfileUser = React.createClass({
//   render() {
//     return (
//       <div>
//         <Profile />
//       </div>
//       );
//   }})
// const ViewerPlayer = React.createClass({
//   render() {
//     return (
//       <div>
//         <Viewer/>
//       </div>
//       );
//   }})
// const VotingPlayer = React.createClass({
//   render() {
//     return (
//       <div>
//         <Voting />
//       </div>
//       );
//   }})
// const SearchResults = React.createClass({
//   render() {
//     return (
//       <div>
//         <Search />
//       </div>
//       );
//   }})
// const App = React.createClass({  
//   render() {
//     return (
//       <section>
//         <Header />
//           <section className="wrapper">
//             {this.props.children}
//           </section>
//         <Footer />
//       </section>
//     )
//   }
// })
// render((
//   <Router history={hashHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Home} />
//       <Route path="home" component={Home}/>
//       <Route path="viewer" component={ViewerPlayer} />
//       <Route path="vote" component={VotingPlayer} />
//       <Route path="register" component={Register} />
//       <Route path="login" component={LoginPage} />
//       <Route path="profile" component={ProfileUser} />
//       <Route path="NewVideo" component={UploadNewVideo} />
//       <Route path="search" component={SearchResults} />
//     </Route>
//   </Router>
// ), document.getElementById('app'))
        
