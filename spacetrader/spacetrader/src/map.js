const shortid = require("shortid");

function generatePlanet() {
  const planetId = shortid.generate();
  // const marketData = {};
  const planetData = {
    x: Math.random(),
    y: Math.random()
  };

  return { planetId, planetData };
}

export default generatePlanet;
