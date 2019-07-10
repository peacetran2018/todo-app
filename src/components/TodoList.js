import React, { Component } from 'react';
//actions
import { delTodo, toggleTodo, setVisibilityTodo } from '../redux/actions/actionMain';
import { TODO_ALL, TODO_COMPLETED, TODO_ACTIVE } from '../redux/actions/actionTypes';
//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: props.ReducerTodos
        }
    }

    onCheckItem = (id) => {
        this.props.toggleTodo(id);
    }

    onDeleteItem = (id) => {
        this.props.delTodo(id);
    }

    render() {
        return (
            <div>
                <div className="btn-group btn-group-toggle" data-toggle="button" style={{marginBottom:"10px"}}>
                    <label className={"btn btn-info " + (this.props.ReducerFilter === TODO_ALL ? 'active' : '')}>
                        <input type="radio" autocomplete="off" onClick={() => this.props.setVisibilityTodo(TODO_ALL)} /> All
                    </label>
                    <label className={"btn btn-info " + (this.props.ReducerFilter === TODO_COMPLETED ? 'active' : '')}>
                        <input type="radio" autocomplete="off" onClick={() => this.props.setVisibilityTodo(TODO_COMPLETED)} /> Completed
                    </label>
                    <label className={"btn btn-info " + (this.props.ReducerFilter === TODO_ACTIVE ? 'active' : '')}>
                        <input type="radio" autocomplete="off" onClick={() => this.props.setVisibilityTodo(TODO_ACTIVE)} /> Active
                    </label>
                </div>
                
                {this.props.ReducerTodos.length !== 0 ? (
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr className="text-center">
                                <th>ID</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.ReducerTodos.map(todo => (
                                <tr className="text-center" key={todo.id} style={{
                                    textDecoration: todo.isCompleted ? "line-through" : "none"
                                }}>
                                    <td>{todo.id}</td>
                                    <td >{todo.content}</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm" onClick={() => { this.onDeleteItem(todo.id) }}><i className="fa fa-trash"></i></button>
                                        &nbsp;
                                        <button className="btn btn-success btn-sm" onClick={() => { this.onCheckItem(todo.id) }}><i className="fa fa-check"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>) : (
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                                <tr className="text-center">
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center">
                                    <td colSpan="3">
                                        Todo list is empty
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    )}

            </div>

        );
    }
}

const getVisibilityTodos = (todos, filter) => {
    switch (filter) {
        case TODO_ALL:
            return todos;
        case TODO_COMPLETED:
            return todos.filter(todo => todo.isCompleted);
        case TODO_ACTIVE:
            return todos.filter(todo => !todo.isCompleted);
        default:
            throw new Error("Unknown Filter: " + filter);
    }
}

const mappingStateToProps = state => {
    //console.log(state);
    return {
        ReducerTodos: getVisibilityTodos(state.ReducerTodos, state.ReducerFilter),
        ReducerFilter: state.ReducerFilter
    }
}

const mappingDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            delTodo,
            toggleTodo,
            setVisibilityTodo
        },
        dispatch
    )
}

export default connect(mappingStateToProps, mappingDispatchToProps)(TodoList);