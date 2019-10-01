import React, { Component } from "react";
import styled from "styled-components";

import {
  systemName,
  systemSize,
  systemTechLevel,
  systemGovernment,
  systemResource,
  systemPolice,
  systemPirates
} from "./systemsData";

const Wrapper = styled.div`
  & ul {
    text-align: center;
    padding: 0;
  }
  & li {
    list-style-type: none;
  }
`;

// [Math.floor(Math.random() * systemName.length)]

// Framing the question is whats important

// Can I keep my arrays of planet descriptions? Each planet will be generated once at the start of the game using data from the arrays

// Planet one is defined below using randomly generated data. It is only defined at beginning of game.

// >> Other planets 2 - x will be generated using this data

// How can I render planet one?

export default class targetSystem extends Component {
  planets = {
    one: {
      name: systemName[Math.floor(Math.random() * systemName.length)],
      size: systemSize[Math.floor(Math.random() * systemSize.length)],
      tech: systemTechLevel[Math.floor(Math.random() * systemTechLevel.length)],
      government:
        systemGovernment[Math.floor(Math.random() * systemGovernment.length)],
      resource:
        systemResource[Math.floor(Math.random() * systemResource.length)],
      police: systemPolice[Math.floor(Math.random() * systemPolice.length)],
      pirates: systemPirates[Math.floor(Math.random() * systemPirates.length)]
    }
  };
  render() {
    return (
      <Wrapper>
        <h1>System</h1>
        <h2>{this.planets.one.name} </h2>
        <ul>
          <li>Size: {this.planets.one.size}</li>
          <li>Tech: {this.planets.one.tech}</li>
          <li>Government: {this.planets.one.government}</li>
          <li>Resources: {this.planets.one.resource}</li>
          <li>Police: {this.planets.one.police}</li>
          <li>Pirates: {this.planets.one.pirates}</li>
        </ul>
      </Wrapper>
    );
  }
}
