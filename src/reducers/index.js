import { RECEIVE_MOVIES } from '../actions/types'

export default function(state ={list:[]}, action) {
	switch (action.type) {
		case RECEIVE_MOVIES:
			return { ...state, list: action.payload }
	}
	return state;
};