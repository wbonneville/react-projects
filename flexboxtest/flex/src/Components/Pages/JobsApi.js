import React, { Component } from "react";
import styled from "styled-components";
import image1 from "../../images/factory.jpeg";

const Api = styled.div`
  margin-top: 2%;

  & h2 {
    font-family: "SF-Mono";
    font-size: 24px;
    font-weight: 520;
  }

  & h4 {
    color: #ff6666;
    font-size: 14px;
  }

  & p {
    font-weight: 400;
    font-size: 14px;
  }
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
              <div key={item.id} className="col-xs-6 vr">
                <h4>Featured</h4>
                <h2>{item.name}</h2>
                <p>
                  {" "}
                  {item.address.city} {item.address.geo.lat},{" "}
                  {item.address.suite}{" "}
                </p>
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
