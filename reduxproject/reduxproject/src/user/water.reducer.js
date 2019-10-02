// USER WATER

const waterCargo = (state = 20, action) => {
  switch (action.type) {
    case "ADDWATER":
      return state + 20;
    case "SELLWATER":
      return state - state;
    default:
      return state;
  }
};

export default waterCargo;
