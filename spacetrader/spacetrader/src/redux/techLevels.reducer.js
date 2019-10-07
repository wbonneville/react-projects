const techLevelGeneration = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_TECH_LEVEL":
      return { ...state, [action.planetId]: action.techLevel };
    default:
      return state;
  }
};

export default techLevelGeneration;
