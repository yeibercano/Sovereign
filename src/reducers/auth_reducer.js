import { AUTH_USER, UNAUTH_USER } from '../actions/types'

export function authUser (state = { authUser: null }, action) {
	switch (action.type) {
	  case AUTH_USER: 
	  	return { 
	  		...state, 
	  		authUser: action.payload 
	  	} 
	  case UNAUTH_USER:
	    return {
	    	...state, 
	    	authUser: null
	    }
	}
	return state
}