import { combineReducers } from "redux";
import planetGeneration from "./planet.reducer";

const allReducers = combineReducers({
  planets: planetGeneration
});

export default allReducers;
