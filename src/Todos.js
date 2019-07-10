import React from 'react';

const Todos = ({ todos }) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                </div>
            )
        })
    ) : (
            <p>The List is empty</p>
        )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos