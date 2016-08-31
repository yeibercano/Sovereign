import { REGISTER } from './actions/types'

export function register(state = {newUser: []}, action) {
	switch (action.type) {
		case REGISTER: 
		  return { ...state, newUser: action.payload } 
	}
	return state
}