import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Gallery from "./Components/Gallery";
import Info from "./Components/Info";
import { NavigationBar } from "./Components/NavigationBar";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Header></Header>
      <Gallery></Gallery>
      <Info></Info>
    </React.Fragment>
  );
}

export default App;
