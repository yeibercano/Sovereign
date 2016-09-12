import { combineReducers } from 'redux'
import { movies } from './receive_movies_reducer'
import { userMovies } from './user_movies_reducer'
import { signedUser } from './signin_reducer'
import { search } from './search_reducer'
import { register } from './register_reducer'
import { movieSelected } from './movie_selected_reducer'
import { reducer as form } from 'redux-form'

 const reducers = combineReducers({
 	movies,
 	userMovies,
 	signedUser,
 	form, 
 	search,
 	register, 
 	movieSelected
 })

export default reducers;