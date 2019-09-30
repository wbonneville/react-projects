export const increment = nr => {
  return {
    type: "INCREMENT",
    payload: nr
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

export const notcool = () => {
  return {
    type: "NOT_COOL"
  };
};
