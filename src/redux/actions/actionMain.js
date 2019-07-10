import { TODO_ADD, TODO_DEL, TODO_TOGGLE, TODO_VISIBILITY } from './actionTypes';

let ID = 3;

export const insertTodo = content => ({
    type: TODO_ADD,
    todoId: ID++,
    content
})

export const delTodo = (id) => ({
    type: TODO_DEL,
    todoId: id
})

export const toggleTodo = (id) =>({
    type: TODO_TOGGLE,
    todoId: id
})

export const setVisibilityTodo = filter => ({
    type: TODO_VISIBILITY,
    filter
})