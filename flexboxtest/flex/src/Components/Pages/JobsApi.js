import React, { Component } from "react";
import styled from "styled-components";

export default class TestApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>loading..</div>;
    } else {
      return (
        <div>
          {items.map(item => (
            <h4 key={item.id}>
              Name: {item.name} | Email: {item.email}
            </h4>
          ))}
        </div>
      );
    }
  }
}
