const systemGeneration = (state = 0, action) => {
  switch (action.type) {
    case "CREATE_SYSTEM":
      return state;
    default:
      return state;
  }
};

export default systemGeneration;
