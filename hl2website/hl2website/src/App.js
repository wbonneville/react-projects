import React from "react";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import SecondaryNavagationBar from "./Components/SecondaryNavigationBar";
import Slide from "./Components/Slide";
import Slogan from "./Components/Slogan";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <SecondaryNavagationBar />
      <Slide> </Slide>
      <Slogan></Slogan>
    </React.Fragment>
  );
}

export default App;
