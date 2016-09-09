import { USER_MOVIES, USER_MOVIES_SELECTED } from '../actions/types'

export function userMovies (state = { recentMovieUrl: "", userMovies: [], recentMovie: ""}, action) {
	switch (action.type) {
		case USER_MOVIES:
			return { 
				...state, 
				recentMovieUrl: action.payload[0].m.properties.video,
				recentMovie: action.payload[0], 
				userMovies: action.payload 
			}
		case USER_MOVIES_SELECTED:
			return {
				...state, recentMovieUrl: action.payload.video
			}
	}
	return state;
};