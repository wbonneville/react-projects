import React from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

import './App.css';

// set state
class App extends React.Component {
  state = {
    items: [],
    id: uuid(),
    item: ' ',
    editItem: false,
  };

  // set state of item to whatever user typed in
  handleChange = e => {
    this.setState({
      item: e.target.value,
    });
  };

  // get rid of all the items
  clearList = e => {
    this.setState({
      items: [],
    });
  };

  // prevent reloading
  handleSubmit = e => {
    e.preventDefault();

    // new item is set originally blank and given a fresh ID
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };

    // set updatedItems to current state of items
    const updatedItems = [...this.state.items, newItem];

    // set the state of application to current items
    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false,
    });
  };

  // filter through all of the items and get rid of the item that matches the selected item
  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems,
    });
  };

  // edit items
  handleEdit = id => {
    // if editItem is false
    if (!this.state.editItem === true) {
      // filter through the items and get the selected ID
      const filteredItems = this.state.items.filter(item => item.id !== id);
      // selected item
      const selectedItem = this.state.items.find(item => item.id === id);
      // edit item set in state
      this.setState({
        items: filteredItems,
        item: selectedItem.title,
        editItem: true,
        id: id,
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>

            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
          </div>
        </div>
        <TodoList
          items={this.state.items}
          clearList={this.clearList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
