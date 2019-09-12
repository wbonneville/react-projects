import React from "react";
import styled from "styled-components";

import Hero from "./Components/Hero";
import Test from "./Components/Test";
import SectionTwo from "./Components/SectionTwo";
import SectionThree from "./Components/SectionThree";
import SectionFour from "./Components/SectionFour";
import Footer from "./Components/Footer";
// import SectionFive from "./Components/SectionFive";

// Jobs

import Jobs from "./Components/Pages/Jobs";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
      <Router>
        <Test></Test>
        <Route path="/" exact component={Hero} />
        <Route path="/" exact component={SectionTwo} />
        <Route path="/" exact component={SectionThree} />
        <Route path="/" exact component={SectionFour} />
        <Switch>
          <Route path="/jobs" component={Jobs} />
        </Switch>
        <Footer></Footer>
      </Router>
      {/* <SectionFive></SectionFive> */}
    </AppWrapper>
  );
}

export default App;
