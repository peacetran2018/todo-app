import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center text-primary" style={{marginTop:"30%"}}>Todos App</h1>
        <div className="card shadow">
          <div className="card-header bg-primary text-white">
            Todo Application </div>
          <div className="card-body">
            <div className="card shadow-sm">
              <div className="card-header bg-danger text-white">Input Form</div>
              <div className="card-body">
                <TodoInput />
              </div>
            </div>

            <div className="card shadow-sm" style={{marginTop:"20px",}}>
              <div className="card-header bg-danger text-white">Todo List</div>
              <div className="card-body">
                <TodoList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
