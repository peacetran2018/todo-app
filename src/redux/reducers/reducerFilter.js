import { TODO_VISIBILITY, TODO_ALL } from '../actions/actionTypes';

const ReducerFilter = (list=TODO_ALL, action) => {
    switch (action.type) {
        case TODO_VISIBILITY:
            return action.filter;
        default:
            return list;
    }
}

export default ReducerFilter;