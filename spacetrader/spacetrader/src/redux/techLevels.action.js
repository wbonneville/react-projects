export function createTechLevels(planetId, techLevel) {
  return {
    type: "CREATE_TECH_LEVEL",
    planetId,
    techLevel
  };
}
