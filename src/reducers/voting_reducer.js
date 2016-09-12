import { VOTING } from '../actions/types'

export function rating(state = {rating:''}, action) {
	switch (action.type) {
		case VOTING:
		  return {
		  	...state, 
		  	rating: action.payload
			}
	}
	return state
}
