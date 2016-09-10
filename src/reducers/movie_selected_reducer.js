import { MOVIE_SELECTED } from '../actions/types'

export function movieSelected(state = {viewerMovie: null}, action) {
	switch (action.type) {
		case MOVIE_SELECTED:
			return {
				...state, viewerMovie: action.payload
			}
	}
	return state
}


