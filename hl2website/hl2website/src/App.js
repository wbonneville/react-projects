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

function App() {
  return (
    <React.Fragment>
      <Official></Official>
      <NavigationBar />
      <SecondaryNavagationBar />
      <Slide> </Slide>
      <Slogan></Slogan>
      <News></News>
      <RecruitSlide></RecruitSlide>
      <NewSection></NewSection>
      <SlideTwo></SlideTwo>
    </React.Fragment>
  );
}

export default App;
