import { USER_LAST_MOVIE } from '../actions/types'

export function last(state = { url: "", allMovies:[]}, action) {
	switch (action.type) {
		case USER_LAST_MOVIE:
			return { 
				...state, 
				url: action.payload, 
				allMovies: action.payload 
			}
	}
	return state;
};