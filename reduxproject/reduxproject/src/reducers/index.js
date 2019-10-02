import waterCargo from "../user/water.reducer";
import userCredits from "../user/credits.reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  userwater: waterCargo,
  usercredits: userCredits
});

export default allReducers;
