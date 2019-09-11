import React, { Component } from "react";
import styled from "styled-components";

const Api = styled.div``;

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
        <Api className="row">
          {items.map(item => (
            <div key={item.id} className="col-xs-6">
              Name: {item.name} | Email: {item.email} |
            </div>
          ))}
        </Api>
      );
    }
  }
}
