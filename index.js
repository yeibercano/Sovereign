import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger'

import App from './src/Components/app'
import LandingPage from './src/Components/LandingPageComponents/landingPage'
import Viewer from './src/Components/ViewingComponent/viewing'
import Voting from './src/Components/VotingComponent/voteContainer'
import CreateAccountScreen from './src/Components/register'
import Login from './src/Components/login'
import Profile from './src/Components/ProfileViewComponents/profile'
import UploadNewVideo from './src/Components/ProfileViewComponents/uploadNewVideo'
import Search from './src/Components/search'
import reducers from './src/reducers/index'

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(reduxThunk, logger)(createStore);
const store = createStoreWithMiddleware(reducers);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={LandingPage} />
        <Route path="home" component={LandingPage}/>
        <Route path="viewer" component={Viewer} />
        <Route path="vote" component={Voting} />
        <Route path="register" component={CreateAccountScreen} />
        <Route path="login" component={Login} />
        <Route path="profile" component={Profile} />
        <Route path="NewVideo" component={UploadNewVideo} />
        <Route path="search" component={Search} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('app'))
