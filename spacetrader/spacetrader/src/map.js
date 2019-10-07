const shortid = require("shortid");

function generatePlanet() {
  const planetId = shortid.generate();
  const marketData = { bob: "awesome market" };
  const planetData = {
    x: Math.random(),
    y: Math.random()
  };

  return { planetId, planetData, marketData };
}

export default generatePlanet;
