import React from 'react';
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
      <h3 className="text-capitalize text-center">todo input</h3>
      <TodoList />
      <TodoInput />
          </div>
      </div>
    </div>
  );
}

export default App;
