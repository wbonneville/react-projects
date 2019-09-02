import React from "react";
import "./App.css";
import Official from "./Components/Official";
import NavigationBar from "./Components/NavigationBar";
import SecondaryNavagationBar from "./Components/SecondaryNavigationBar";
import Slide from "./Components/Slide";
import Slogan from "./Components/Slogan";
import News from "./Components/News";
import SlideTwo from "./Components/SlideTwo";
import RecruitSlide from "./Components/RecruitSlide";
import NewSection from "./Components/NewSection";
import SlideThree from "./Components/SlideThree";
import { Grid, Row, Col } from "react-flexbox-grid";

function App() {
  return (
    <Grid fluid>
      <Row>
        <Col xs={12}>
          <Official></Official>
        </Col>
        <Col xs={12}>
          <NavigationBar />
        </Col>
        <Col xs={12}>
          <SecondaryNavagationBar />
        </Col>
        <Col xs={12}>
          <Slide> </Slide>
          <Slogan></Slogan>
        </Col>
        <News></News>
        <RecruitSlide></RecruitSlide>
        <NewSection></NewSection>
        <SlideThree></SlideThree>
        <SlideTwo></SlideTwo>
      </Row>
    </Grid>
  );
}

export default App;
