import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Gallery from "./Components/Gallery";
import Info from "./Components/Info";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Gallery></Gallery>
      <Info></Info>
    </React.Fragment>
  );
}

export default App;
