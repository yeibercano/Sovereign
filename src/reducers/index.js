import { combineReducers } from 'redux'
import { category } from './receive_category_reducer'
import { movies } from './receive_movies_reducer'


 const reducers = combineReducers({
 	category,
 	movies,
 })

export default reducers;