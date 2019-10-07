import { combineReducers } from "redux";
import planetGeneration from "./planet.reducer";
import selectPlanet from "./selectPlanet.reducer";
import marketGeneration from "./market.reducer";
import techLevelGeneration from "./techLevels.reducer";

const allReducers = combineReducers({
  planets: planetGeneration,
  techLevels: techLevelGeneration,
  // contains ID which is a string
  selectedPlanet: selectPlanet,
  markets: marketGeneration
});

export default allReducers;
