import { SEARCH } from '../actions/types'

export function search(state = { results:[]}, action) {
	switch (action.type) {
		case SEARCH:
			return {
				...state, results: action.payload
			}
	}
	return state
}