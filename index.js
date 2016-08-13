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
import App from './src/Components/app'
import reducers from './src/reducers/index'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
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
