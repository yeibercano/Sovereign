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
    .then(data => {
      localStorage.setItem('searchResults', JSON.stringify(data.data));
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
    axios.post('/users/login',userLogin )
      .then(function(response){
        if(response.data.status === 401) {
          alert('wrong password')
        }
        localStorage.setItem('user', JSON.stringify(response.data))
        // localStorage.setItem('user', response.data)
        dispatch({ type: types.SIGNIN, payload: true})
      }).then(function() {
        hashHistory.push('home')
      }).catch(function(err){
        if (err ) throw err
      });
  }
}



