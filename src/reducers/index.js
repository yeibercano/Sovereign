import { combineReducers } from 'redux'
import { category } from './receive_category_reducer'
import { movies } from './receive_movies_reducer'
import { last } from './user_last_movie_reducer'
import { signin } from './signin_reducer'
import { search } from './search_reducer'
import { register } from './register_reducer'
import { movieSelected } from './movie_selected_reducer'

 const reducers = combineReducers({
 	category,
 	movies,
 	last,
 	signin, 
 	search,
 	register, 
 	movieSelected
 })

export default reducers;