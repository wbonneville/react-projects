import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { createPlanet } from "./redux/planet.action";
import generatePlanet from "./map";

const Canvas = styled.canvas`
  background-color: #f6f6f6;
  width: 400px;
  height: 200px;
`;

function App() {
  // dispatch hook
  const dispatch = useDispatch();

  // ref for the canvas
  const canvas = useRef();

  // called when app is rendered
  useEffect(() => {
    // loop creates x instances of planets
    for (var i = 0; i < 300; i++) {
      const { planetId, planetData } = generatePlanet();
      // dispatches action to bring data into the store
      dispatch(createPlanet(planetId, planetData));

      // dispatches action to bring market data into thes tore
      // dispatch(createMarket(planetId, marketData));
    }
  }, [true]);

  // this is the hook that selects planets data from state
  const planets = useSelector(state => state.planets);

  useEffect(() => {
    // provides context for the canvas to draw things
    const ctx = canvas.current.getContext("2d");

    // this loop takes planets as an argument and for each unique planet do code
    Object.keys(planets).forEach(planetId => {
      // get planet data
      const planet = planets[planetId];

      // set variables to random number on canvas
      const x = planet.x * canvas.current.width;
      const y = planet.y * canvas.current.height;

      // draw planet
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fillStyle = "green";
      ctx.fill();
    });
  });

  return (
    <div className="App">
      <Canvas ref={canvas} width={800} height={400} />
    </div>
  );
}

export default App;
