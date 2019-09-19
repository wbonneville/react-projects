import React from "react";
import styled from "styled-components";

import Hero from "./Components/Hero";
import Test from "./Components/Test";
// import SectionTwo from "./Components/SectionTwo";
import SectionThree from "./Components/SectionThree";
import SectionFour from "./Components/SectionFour";
import Footer from "./Components/Footer";
import SectionFive from "./Components/SectionFive";

// Pages

import Jobs from "./Components/Pages/Jobs";
import Housing from "./Components/Pages/Housing";
import Rationing from "./Components/Pages/Rationing";
import Administration from "./Components/Pages/Administration";
import Benefactors from "./Components/Pages/Benefactors";
import CivilProtection from "./Components/Pages/CivilProtection";
import Transportation from "./Components/Pages/Transportation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Wrapping entire app in a styled component
// Hacky?

const AppWrapper = styled.div`
  max-width: 3000px;

  overflow-x: hidden;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Test></Test>
        <Route path="/" exact component={Hero} />
        {/* <Route path="/" exact component={SectionTwo} /> */}
        <Route path="/" exact component={SectionThree} />
        {/* <Route path="/" exact component={SectionFour} /> */}
        <Switch>
          <Route path="/jobs" component={Jobs} />
          <Route path="/housing" component={Housing} />
          <Route path="/rationingandcredits" component={Rationing} />
          <Route path="/administration" component={Administration} />
          <Route path="/benefactors" component={Benefactors} />
          <Route path="/civilprotection" component={CivilProtection} />
          <Route path="/transportation" component={Transportation} />
          <Route path="/" exact component={SectionFive} />
        </Switch>
        <Footer></Footer>
      </Router>
    </AppWrapper>
  );
}

export default App;
