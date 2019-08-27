import React from "react";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import SecondaryNavagationBar from "./Components/SecondaryNavigationBar";
import Slide from "./Components/Slide";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <SecondaryNavagationBar />
      <Slide> </Slide>
    </React.Fragment>
  );
}

export default App;
