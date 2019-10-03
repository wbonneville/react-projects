import waterCargo from "../user/water.reducer";
import fursCargo from "../user/furs.reducer";
import systemGeneration from "../systems/system.reducer";
import userCredits from "../user/credits.reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  userwater: waterCargo,
  userfurs: fursCargo,
  usercredits: userCredits,
  systems: systemGeneration
});

export default allReducers;
