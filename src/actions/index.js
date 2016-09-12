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
      dispatch({ type: types.SEARCH, payload: response.data})
      hashHistory.push('search');
    })
    .catch(function(err) {
      if (err) throw err
    });
	}
}

export const userMovies = (username) => {
  return dispatch => {
    axios.get("/movies/user", {params: {userName: username }})
    .then(response => {
      dispatch({ type: types.USER_MOVIES, payload:response.data})
    })
    .catch(function(err){
      if (err) throw err
    });
  }
}

export const userMoviesSelected = (movie) => {
  return dispatch => {
    dispatch({ type: types.USER_MOVIES_SELECTED, payload: movie})
  }
}

export const movieSelected = (movie, route = 'viewer') => {
  return dispatch => {
    dispatch({ type: types.MOVIE_SELECTED, payload: movie})
    hashHistory.push(route)  
  }
}

export const voting = (vote) => {
  return dispatch => {
    axios.post('/movies/rating', vote);
      hashHistory.push("profile");
  }
}

export const authUser = (userLogin) => {
  return dispatch => {
    axios.post('/users/login',userLogin)
    .then(response => {
      dispatch({ type: types.AUTH_USER, payload: response.data})
      hashHistory.push('profile')
    })
    .catch(function(err){
      if (err ) throw err
    });
  }
}

export const unAuthUser = () => {
  return dispatch => {
    dispatch({ type: types.UNAUTH_USER, payload: null})
    hashHistory.push('home')
  }
}

export const search = (target) => {
  return dispatch => {
    axios.get('/movies/search', {params: {target}})
    .then(response => {
      dispatch({ type: types.SEARCH, payload:response.data })
      hashHistory.push('search');
    })
    .catch(function(err) {
      if (err) throw err
    });
  }
}

export const register = (uInfo) => {
  return dispatch => {
    axios.post('/users/register', uInfo)
    .then(response => {
      //userInfo is the response back with the very last user entered
      let userInfo = response.data;
      //sets "user" in localstorage to what is contained in userInfo
      localStorage.setItem('user', JSON.stringify(userInfo))
      // localStorage.setItem('newUser', userInfo)
      dispatch({ type: types.REGISTER, payload: response.data})
      hashHistory.push('profile')
    })
  }
}




