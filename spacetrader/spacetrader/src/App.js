import React from "react";

import styled from "styled-components";
import { useSelector } from "react-redux";
import generatePlanets from "./map";
import { useEffect } from "react";

const Canvas = styled.canvas`
  background-color: #f6f6f6;
  width: 400px;
  height: 200px;
`;

const ctx = this.refs.canvas.getContext("2d");
const planets = useSelector(state => state.systems);

function App() {
  useEffect(() => {
    Object.keys(planets).forEach(planetId => {
      const planet = planets[planetId];
      const x = planet.x;
      const y = planet.y;

      for (var i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        generatePlanets();
      }
      ctx.fillStyle = "green";
      ctx.fill();
    });
  }, [true]);

  return (
    <div className="App">
      <Canvas ref="canvas" width={800} height={400}></Canvas>
    </div>
  );
}

export default App;
