const waterCargo = (state = 20, action) => {
  switch (action.type) {
    case "ADDWATER":
      return state + 20;
    case "LOSEWATER":
      return state - 1;
    case "SELLWATER":
      return state - state;
    default:
      return state;
  }
};

export default waterCargo;

// Is this users water?
// Yes
