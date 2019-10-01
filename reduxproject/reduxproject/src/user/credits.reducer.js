const usercredits = (state = 1000, action) => {
  switch (action.type) {
    case "CREDITS":
      return state;
    case "ADDCREDITS":
      return state + action.amount;
    default:
      return state;
  }
};

export default usercredits;
