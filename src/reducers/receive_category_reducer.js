import { RECEIVE_CATEGORY } from '../actions/types'

export function category(state = {allMovies:[]}, action) {
	switch (action.type) {
		case RECEIVE_CATEGORY:
			return { ...state, allMovies: action.payload }
	}
	return state;
};