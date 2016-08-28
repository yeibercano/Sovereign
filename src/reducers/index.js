import { combineReducers } from 'redux'
import { category } from './receive_category_reducer'
import { movies } from './receive_movies_reducer'
import { last } from './user_last_movie_reducer'
import { signin } from './signin_reducer'
import { search } from './search_reducer'

 const reducers = combineReducers({
 	category,
 	movies,
 	last,
 	signin, 
 	search
 })

export default reducers;