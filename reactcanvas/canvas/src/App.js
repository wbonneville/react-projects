import React from "react";
import Character from "./Character";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      {" "}
      <Character
        name="Zeli"
        age="303"
        transformation="ongoing and consistent"
        initialStatus="critical"
        initialAge={1}
      />
    </div>
  );
}

export default App;
