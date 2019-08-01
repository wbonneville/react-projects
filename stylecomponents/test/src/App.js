import React from "react";
import "./App.css";
import styled, { css } from "styled-components";
import Header from "./Components/Header.js";
import Showcase from "./Components/Showcase.js";
import Features from "./Components/Features.js";
import Infosection from "./Components/Infosection.js";
import Company from "./Components/Company.js";
import Footer from "./Components/Footer.js";
import { Grid, Row, Col } from "react-flexbox-grid";

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <Features />
      <Infosection />
      <Company />
      <Footer />
    </div>
  );
}

export default App;
