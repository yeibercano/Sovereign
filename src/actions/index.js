import axios from 'axios';
import { hashHistory } from 'react-router';
import * as types from './types';

export const getMovies = () => {
	return dispatch => {
    axios.get('/movies')
    .then( response => { 
    	dispatch({ type: types.RECEIVE_MOVIES, payload: response.data })
    });
  }
} 

export const getCategory = (category)  => {
	return dispatch => {
		axios.get('/movies/categories', {params: {target: category}})
    .then(response => {
      localStorage.setItem('searchResults', JSON.stringify(response.data));
      dispatch({ type: types.RECEIVE_CATEGORY, payload: response.data})
    })
    .then(function() {
      hashHistory.push('search');
    })
    .catch(function(err) {
      if (err) throw err
    });
	}
}

export const userLastMovie = (username) => {
  return dispatch => {
    axios.get("/movies/user", {params: {userName: username }})
    .then(response => {
      console.log('response', response)
      dispatch({ type: types.USER_LAST_MOVIE, payload:response.data})
      // this.setState({ url: response.data[data.data.length-1].m.properties.video, allMovies: response.data });
    })
    .catch(function(err){
      if (err) throw err
    });
  }
}

export const signIn = (userLogin) => {
  return dispatch => {
    axios.post('/users/login',userLogin)
    .then(response => {
      localStorage.setItem('user', JSON.stringify(response.data))
      dispatch({ type: types.SIGNIN, payload: true})
      hashHistory.push('profile')
    })
    .catch(function(err){
      if (err ) throw err
    });
  }
}

export const search = (target) => {
  return dispatch => {
    axios.get('/movies/search', {params: {target}})
    .then(response => {
      localStorage.setItem('searchResults', JSON.stringify(response.data));
      dispatch({ type: types.SEARCH, payload:response.data })
      hashHistory.push('search');
    })
    .catch(function(err) {
      if (err) throw err
    });
  }
}

