import { SEARCH } from '../actions/types'

export function(state = { results:[]}, action) {
	switch (action.type) {
		case SEARCH:
			return {
				...state, results: action.payload
			}
		default:
		  return state
	}
}