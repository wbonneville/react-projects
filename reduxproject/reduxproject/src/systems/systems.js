import React, { Component } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

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

// import { useSelector, useDispatch } from "react-redux";

const Canvas = styled.canvas`
  background-color: #f6f6f6;
  width: 400px;
  height: 200px;
`;

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

// How to save all constants in one object and how to access it?
// How to assign DATA from OBJECT to ITEM in ARRAY?

// Each planet must have its own state...

export default class TargetSystem extends Component {
  componentDidMount() {
    this.generatePlanets();
  }

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
      water: systemWater,
      furs: systemFurs,
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

  generatePlanets = () => {
    const ctx = this.refs.canvas.getContext("2d");
    ctx.beginPath();
    for (var i = 0; i < 3; i++) {
      const x = Math.floor(Math.random() * this.refs.canvas.width);
      const y = Math.floor(Math.random() * this.refs.canvas.height);
      ctx.moveTo(x, y);

      ctx.arc(x, y, 3, 0, Math.PI * 2);
    }
    ctx.fillStyle = "green";
    ctx.fill();
  };

  render() {
    return (
      <Wrapper>
        <h1>System</h1>
        <h2>{this.planets.one.name} </h2>

        <h3>Galactic Chart</h3>
        <Canvas ref="canvas" width={800} height={400}></Canvas>
      </Wrapper>
    );
  }
}

ReactDOM.render(<TargetSystem />, document.getElementById("root"));
