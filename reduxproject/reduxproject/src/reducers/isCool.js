const isCoolReducer = (state = false, action) => {
  switch (action.type) {
    case "IS_COOL":
      return !state;
    default:
      return state;
  }
};

export default isCoolReducer;
