const systemGeneration = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_SYSTEM":
      return { ...state, [action.planetId]: action.planetData };
    default:
      return state;
  }
};

export default systemGeneration;
