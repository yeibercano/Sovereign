import { SIGNIN } from '../actions/types'

export function signin (state = { authenticated: false }, action) {
	switch (action.type) {
	  case SIGNIN: 
	  	return { 
	  		...state, 
	  		authenticated: action.payload 
	  	} 
	}
	return state
}