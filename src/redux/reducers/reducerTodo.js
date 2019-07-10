import { TODO_ADD, TODO_DEL, TODO_TOGGLE } from '../actions/actionTypes';

const TODO_LIST = [
    {
        id: 1,
        content: 'Learn ReactJS',
        isCompleted: false
    },
    {
        id: 2,
        content: 'Learn React Native',
        isCompleted: false
    }
]

const ReducerTodo = (list = TODO_LIST, action) => {
    switch (action.type) {
        case TODO_ADD:
            return [...list, {
                id: action.todoId,
                content: action.content,
                isCompleted: false
            }];
        case TODO_DEL:
            const todoID = parseInt(action.todoId);
            return list.filter(todo => todo.id !== todoID);
        case TODO_TOGGLE:
            return list.map(todo => (
                todo.id === action.todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
            ))
        default:
            return list;
    }
}

export default ReducerTodo;