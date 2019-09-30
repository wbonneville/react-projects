import counterReducer from "./counter";
import isCoolReducer from "./isCool";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  iscool: isCoolReducer
});

export default allReducers;
