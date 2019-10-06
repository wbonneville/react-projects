import { combineReducers } from "redux";
import planetGeneration from "./planet.reducer";
import selectPlanet from "./selectPlanet.reducer";

const allReducers = combineReducers({
  planets: planetGeneration,
  // contains ID which is a string
  selectedPlanet: selectPlanet
});

export default allReducers;
