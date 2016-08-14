import { RECEIVE_MOVIES } from '../actions/types'

export default function(state ={allMovies:[]}, action) {
	switch (action.type) {
		case RECEIVE_MOVIES:
			return { ...state, allMovies: action.payload }
	}
	return state;
};