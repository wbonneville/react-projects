import React, { Component } from "react";
import styled from "styled-components";
import gif from "../../images/download.gif";

const Gif = styled.div`
  background-image: url(${gif});
  background-size: cover;
  height: 450px;
  opacity: 0.8;
`;

export default class Transportation extends Component {
  render() {
    return (
      <div>
        <Gif className="row">
          <div className="col-xs-12">
            {" "}
            <h1>Transportation, but not as you know it.</h1>
          </div>
        </Gif>
      </div>
    );
  }
}
