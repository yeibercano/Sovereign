import { USER_MOVIES } from '../actions/types'

export function userMovies (state = { recentMovieUrl: "", userMovies: [], recentMovie: ""}, action) {
	switch (action.type) {
		case USER_MOVIES:
			return { 
				...state, 
				recentMovieUrl: action.payload[0].m.properties.video,
				recentMovie: action.payload[0], 
				userMovies: action.payload 
			}
	}
	return state;
};