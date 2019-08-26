import React from "react";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import SecondaryNavagationBar from "./Components/SecondaryNavigationBar";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <SecondaryNavagationBar />
    </React.Fragment>
  );
}

export default App;
