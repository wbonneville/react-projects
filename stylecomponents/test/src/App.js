import React from "react";
import "./App.css";
import styled, { css } from "styled-components";
import Header from "./Components/Header.js";
import Showcase from "./Components/Showcase.js";
import Features from "./Components/Features.js";
import Infosection from "./Components/Infosection";

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <Features />
      <Infosection />
    </div>
  );
}

export default App;
