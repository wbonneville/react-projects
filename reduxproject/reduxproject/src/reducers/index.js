import waterCargo from "../marketplace/water.reducer";
import userCredits from "../user/credits.reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  water: waterCargo,
  usercredits: userCredits
});

export default allReducers;
