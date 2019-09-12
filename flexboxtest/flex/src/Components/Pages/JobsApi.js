import React, { Component } from "react";
import styled from "styled-components";
import image1 from "../../images/factory.jpeg";

const Api = styled.div`
  margin-top: 2%;

  & h3 {
    font-family: "SF-Mono";
    font-size: 18px;
    font-weight: 100;
  }
`;

const Image = styled.div`
  margin-top: 5rem;
  background-image: url(${image1});
  background-size: cover;
  height: 150px;
  width: 275px;
`;

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
            <React.Fragment>
              <div key={item.id} className="col-xs-6">
                <h3>Name: {item.name}</h3>
              </div>
              <div className="col-xs-6">
                <Image></Image>
              </div>
            </React.Fragment>
          ))}
        </Api>
      );
    }
  }
}

// | {item.address.street} | {item.address.suite} |
//               {item.address.city} | {item.address.zipcode}|{" "}
//               {item.address.geo.lat}
