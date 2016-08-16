import axios from 'axios';
import { hashHistory } from 'react-router'
import * as types from './types'

export function getMovies() {
	return dispatch => {
    axios.get('/movies')
    .then( response => { 
    	dispatch({ type: types.RECEIVE_MOVIES, payload: response.data })
    });
  }
} 

export function getCategory(category) {
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

