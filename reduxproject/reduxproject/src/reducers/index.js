import waterCargo from "../user/water.reducer";
import fursCargo from "../user/furs.reducer";

import userCredits from "../user/credits.reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  userwater: waterCargo,
  userfurs: fursCargo,
  usercredits: userCredits
});

export default allReducers;
