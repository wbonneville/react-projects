import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header.js";
import Showcase from "./Components/Showcase.js";
import Features from "./Components/Features.js";
import Infosection from "./Components/Infosection.js";
import Company from "./Components/Company.js";
import Footer from "./Components/Footer.js";

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
