import { SIGNED_USER } from '../actions/types'

export function signedUser (state = { signedUser: false }, action) {
	switch (action.type) {
	  case SIGNED_USER: 
	  	return { 
	  		...state, 
	  		signedUser: action.payload 
	  	} 
	}
	return state
}