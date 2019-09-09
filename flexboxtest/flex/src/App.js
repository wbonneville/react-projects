import React from "react";
import styled from "styled-components";

import Hero from "./Components/Hero";
import Test from "./Components/Test";
import SectionTwo from "./Components/SectionTwo";
import SectionThree from "./Components/SectionThree";
import SectionFour from "./Components/SectionFour";

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
      <SectionTwo></SectionTwo>
      <SectionThree></SectionThree>
      <SectionFour></SectionFour>
    </AppWrapper>
  );
}

export default App;
