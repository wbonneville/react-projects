import { TECH_LEVELS } from "./planetData";
// import { politicalSystems } from "./planetData";

const shortid = require("shortid");

function generatePlanet() {
  const planetId = shortid.generate();

  // const politicalSystem = Math.floor(
  //   Math.random() * Object.keys(politicalSystems).length
  // );
  const marketData = { bob: "awesome market" };
  const planetData = {
    x: Math.random(),
    y: Math.random(),
    techLevel: Math.floor(Math.random() * TECH_LEVELS.length)
  };

  return { planetId, planetData, marketData };
}

export default generatePlanet;
