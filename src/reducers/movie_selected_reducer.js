import { MOVIE_SELECTED } from '../actions/types'

export function movieSelected(state = {movieSelected:''}, action) {
	console.log('action', action)
	switch (action.type) {
		case MOVIE_SELECTED:
			return {
				...state, movieSelected: action.payload
			}
	}
	return state
}
