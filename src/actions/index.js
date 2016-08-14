import axios from 'axios';
import * as types from './types'

export function getMovies() {
	return dispatch => {
    axios.get('/movies')
    .then( response => { 
    	dispatch({ type: types.RECEIVE_MOVIES, payload: response.data })
    });
  }
} 