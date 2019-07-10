import ReducerTodos from './reducerTodo';
import ReducerFilter from './reducerFilter';

import { combineReducers } from 'redux';

export default combineReducers({
    ReducerTodos,
    ReducerFilter
})