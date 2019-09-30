const usercredits = (state = 1000, action) => {
  switch (action.type) {
    case "CREDITS":
      return state;
    default:
      return state;
  }
};

export default usercredits;
