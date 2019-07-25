import React from 'react';
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'


import './App.css';

function App() {
  return (
    <div>
      <TodoItem />
      <TodoList />
      <TodoInput />
    </div>
  );
}

export default App;
