import React, { Component } from "react";

export default class Epic extends Component {
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
          <ul>
            {items.map(item => (
              <li key={item.id}>
                Name: {item.name} | Email: {item.email}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}
