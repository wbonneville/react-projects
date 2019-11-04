import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    // destructuring to get props
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        <TodoItem />

        {items.map(item => {
          return (
            <TodoItem
              // give item key
              key={item.id}
              // display title prop
              title={item.title}
              // get delete prop
              handleDelete={() => handleDelete(item.id)}
              // get edit prop
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}

        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={clearList}
        >
          clear list
        </button>
      </ul>
    );
  }
}
