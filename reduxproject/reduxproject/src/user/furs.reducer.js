// USER FUR

const fursCargo = (state = 30, action) => {
  switch (action.type) {
    case "ADDFURS":
      return state + 20;
    case "SELLFURS":
      return state - state;
    default:
      return state;
  }
};

export default fursCargo;
