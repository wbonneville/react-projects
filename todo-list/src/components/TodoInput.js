import React, { Component } from 'react';
import { classBody } from '@babel/types';

export default class TodoInput extends Component {
  render() {
    // destructuring to get props
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item"
              // item value = to item
              value={item}
              // display what user types
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className={
              // if item edited, display success
              editItem
                ? 'btn btn-block btn-success mt-3'
                : // or dont
                  'btn btn-block btn-primary mt-3'
            }
          >
            {/* display edit item if edit item clicked */}
            {editItem ? 'edit item' : 'add item'}
          </button>
        </form>
      </div>
    );
  }
}
