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
import { createGlobalStyle } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCheck } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCheck);

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "San Francisco", sans-serif;
    font-size: 18px;
    line-height: 1.5em;
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
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
