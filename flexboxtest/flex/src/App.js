import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Test from "./Components/Test";
import styled from "styled-components";

// Wrapping entire app in a styled component
// Hacky?

const AppWrapper = styled.div`
  // max-width: 3000px;
  // applying max-width to page
  align-content: center;
  overflow-x: hidden;
`;

function App() {
  return (
    <AppWrapper>
      <Test></Test>
      <Hero></Hero>
    </AppWrapper>
  );
}

export default App;
