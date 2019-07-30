import React from "react";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

import "./App.css";

class App extends React.Component {
  state = {
    items: [],
    id: uuid(),
    item: " ",
    editItem: false
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  clearList = e => {
    this.setState({
      items: []
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    });
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
            />
          </div>
        </div>
        <TodoList items={this.state.items} clearList={this.clearList} />
      </div>
    );
  }
}

export default App;
