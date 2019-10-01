import React, { Component } from "react";
import styled from "styled-components";
const Box = styled.div`
  height: 250px;
  width: 250px;
  border: 1px solid black;
`;
const Planet = styled.div`
  height: 20px;
  width: 20px;
  border: 1px solid black;
  background-color: black;
  border-radius: 50%;
  margin: 20%;
`;

const PlanetTwo = styled(Planet)`
  margin: 5%;
`;
export default class miniMap extends Component {
  render() {
    return (
      <Box>
        <Planet></Planet>
        <PlanetTwo></PlanetTwo>
      </Box>
    );
  }
}
