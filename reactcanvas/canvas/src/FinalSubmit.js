import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  & h1 {
    color: white;
    font-size: 50px;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  border: 1px solid white;
  padding: 10px;
`;

export default class FinalSubmit extends Component {
  render() {
    return (
      <Wrapper className="row center-xs">
        <div className="col-xs-12">
          <h1>Name: {this.props.name}</h1>
          <h1>Age: {this.props.age}</h1>
          <h1>Race: {this.props.race}</h1>
        </div>
        <StyledLink to="/">Back to input</StyledLink>
      </Wrapper>
    );
  }
}
