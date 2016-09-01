import { MOVIE_SELECTED } from '../actions/types'

export function movieSelected(state = {movieSelected:''}, action) {
	switch (action.type) {
		case MOVIE_SELECTED:
			return {
				...state, movieSelected: action.payload
			}
	}
	return state
}
