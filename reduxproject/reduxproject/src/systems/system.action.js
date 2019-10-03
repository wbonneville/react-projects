export function createSystem(planetId, planetData) {
  return {
    type: "CREATE_SYSTEM",
    planetId,
    planetData
  };
}
