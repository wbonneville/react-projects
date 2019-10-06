import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
// farts
import { selectPlanet } from "./redux/selectPlanet.action";
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
    for (var i = 0; i < 200; i++) {
      const { planetId, planetData } = generatePlanet();
      // dispatches action to bring data into the store
      dispatch(createPlanet(planetId, planetData));

      // dispatches action to bring market data into thes tore
      // dispatch(createMarket(planetId, marketData));
    }
  }, [true]);

  // this is the hook that selects planets data from state
  const planets = useSelector(state => state.planets);
  const selectedPlanet = useSelector(state => state.selectedPlanet);
  const selectedPlanetData = selectedPlanet[planetId];
  console.log(selectedPlanetData);

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
      ctx.ellipse(x, y, 4, 4, 0, 0, Math.PI * 2);
      // if selected planet is equal to the current planet ID
      if (selectedPlanet == planetId) {
        ctx.fillStyle = "blue";
      } else {
        ctx.fillStyle = "green";
      }

      ctx.fill();
    });
  });

  /* selectedPlanet: abc
   *
   * foo
   * bar
   * if (abc)
   * qef
   *
   */

  const handleCanvasClick = event => {
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    const canvasX = canvas.current.offsetLeft;
    const canvasY = canvas.current.offsetTop;
    const x = (mouseX - canvasX) * 2;
    const y = (mouseY - canvasY) * 2;
    Object.keys(planets).forEach(planetId => {
      // get planet data
      const planet = planets[planetId];
      const planetX = planet.x * canvas.current.width;
      const planetY = planet.y * canvas.current.height;

      const deltaX = Math.abs(x - planetX);
      const deltaY = Math.abs(y - planetY);

      if (deltaX < 4 && deltaY < 4) {
        // dispatch planet selection action with our planet ID
        dispatch(selectPlanet(planetId));
      }
    });
  };

  return (
    <div className="App">
      <Canvas
        onClick={handleCanvasClick}
        ref={canvas}
        width={800}
        height={400}
      />
      <h1></h1>
    </div>
  );
}

export default App;
