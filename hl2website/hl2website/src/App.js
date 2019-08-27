import React from "react";
import "./App.css";
import HeadNavigationBar from "./Components/NavigationBar";
import NavigationBar from "./Components/NavigationBar";
import SecondaryNavagationBar from "./Components/SecondaryNavigationBar";
import Slide from "./Components/Slide";
import Slogan from "./Components/Slogan";

function App() {
  return (
    <React.Fragment>
      <HeadNavigationBar />
      <NavigationBar />
      <SecondaryNavagationBar />
      <Slide> </Slide>
      <Slogan></Slogan>
    </React.Fragment>
  );
}

export default App;
