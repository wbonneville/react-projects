import React, { Component } from "react";
import styled from "styled-components";

import {
  systemName,
  systemSize,
  systemTechLevel,
  systemGovernment,
  systemResource,
  systemPolice,
  systemPirates,
  systemWater,
  systemFurs,
  systemFood,
  systemOre,
  systemGames,
  systemFirearms,
  systemMedicine,
  systemNarcotics,
  systemMachines,
  systemRobots
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

  marketplaces = {
    one: {
      water: systemWater[0],
      furs: systemFurs[0],
      food: systemFood,
      ore: systemOre,
      games: systemGames,
      firearms: systemFirearms,
      medicine: systemMedicine,
      narcotics: systemNarcotics,
      machines: systemMachines,
      robots: systemRobots
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

        <p>Water: {this.marketplaces.one.water}</p>
        <p>Furs: {this.marketplaces.one.furs}</p>
        <p>Food: {this.marketplaces.one.food}</p>
        <p>Ore: {this.marketplaces.one.ore}</p>
        <p>Games: {this.marketplaces.one.games}</p>
        <p>Firearms: {this.marketplaces.one.firearms}</p>
        <p>Medicine: {this.marketplaces.one.medicine}</p>
        <p>Narcotics: {this.marketplaces.one.narcotics}</p>
        <p>Machines: {this.marketplaces.one.machines}</p>
        <p>Robots: {this.marketplaces.one.robots}</p>
      </Wrapper>
    );
  }
}
