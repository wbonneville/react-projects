export const credits = () => {
  return {
    type: "CREDITS"
  };
};

export const addCredits = (amount = 0) => {
  return {
    type: "ADDCREDITS",
    amount
  };
};
