import React, { Component } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
// import { useSelector, useDispatch } from "react-redux";

// actions

// import { createSystem } from "../systems/system.action";

// reducers

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

const shortid = require("shortid");

const planets = {
  one: {
    name: systemName[Math.floor(Math.random() * systemName.length)],
    size: systemSize[Math.floor(Math.random() * systemSize.length)],
    tech: systemTechLevel[Math.floor(Math.random() * systemTechLevel.length)],
    government:
      systemGovernment[Math.floor(Math.random() * systemGovernment.length)],
    resource: systemResource[Math.floor(Math.random() * systemResource.length)],
    police: systemPolice[Math.floor(Math.random() * systemPolice.length)],
    pirates: systemPirates[Math.floor(Math.random() * systemPirates.length)]
  }
};

const marketplaces = {
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

// How to assign DATA from OBJECT to ITEM in ARRAY?

export default class TargetSystem extends Component {
  componentDidMount() {
    this.generatePlanets();
  }

  generateSystem = () => {
    shortid.generate();
    const planetData = Object.values(planets);
    const marketplacesData = Object.values(marketplaces);
    console.log(shortid.generate());
    console.log(planetData);
    console.log(marketplacesData);
  };

  generatePlanets = () => {
    // GENERATE PLANET

    // const systemData = useSelector(state => state.systems);

    const ctx = this.refs.canvas.getContext("2d");
    ctx.beginPath();
    // var names = [];
    for (var i = 0; i < 3; i++) {
      const x = Math.floor(Math.random() * this.refs.canvas.width);
      const y = Math.floor(Math.random() * this.refs.canvas.height);
      // names[i] = systemName[Math.floor(Math.random() * systemName.length)];
      ctx.moveTo(x, y);
      // console.log(names);
      ctx.arc(x, y, 3, 0, Math.PI * 2);
    }
    ctx.fillStyle = "green";
    ctx.fill();
    this.generateSystem();
  };

  render() {
    return (
      <Wrapper>
        <h1>System</h1>
        {/* <h2>{this.planets.one.name} </h2> */}

        <h3>Galactic Chart</h3>
        <Canvas ref="canvas" width={800} height={400}></Canvas>
      </Wrapper>
    );
  }
}

ReactDOM.render(<TargetSystem />, document.getElementById("root"));
