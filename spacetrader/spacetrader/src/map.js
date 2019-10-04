import { useDispatch } from "react-redux";
import { createPlanet } from "./redux/planet.action";

const shortid = require("shortid");

function generatePlanets() {
  dispatch(createPlanet(planetId, planetData));
  const planetId = shortid.generate();
  const dispatch = useDispatch();
  const planetData = {
    x: Math.floor(Math.random() * this.refs.canvas.width),
    y: Math.floor(Math.random() * this.refs.canvas.height)
  };
}

export default generatePlanets;
