import React from 'react';

import 'bootstrap'

import  TodoInput  from './components/TodoInput'
import  TodoItem  from './components/TodoItem'
import  TodoList from './components/TodoList'

function App() {
  return (
    <div>
      hello from yee
      <TodoInput />
      <TodoItem />
      <TodoList />
    </div>
  );
}

export default App;
