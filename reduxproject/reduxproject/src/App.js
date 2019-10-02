import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import System from "./systems/systems";
// import MiniMap from "./systems/miniMap";
import Map from "./systems/map";

import { addwater } from "./user/water.action"; //actions
import { sellwater } from "./user/water.action";
import { addCredits } from "./user/credits.action";

const Wrapper = styled.div``;
const MiniMapWrapper = styled.div`
  background-color: #f6f6f6;
  margin-top: 2%;
  margin-bottom: 2%;
`;

const GalacticChartTitle = styled.div`
  margin-top: 2%;
`;
function App() {
  // reducers
  const userwater = useSelector(state => state.userwater);
  const usercredits = useSelector(state => state.usercredits);

  // Dispatch
  const dispatch = useDispatch();

  // function multiplies water * 2 and adds amount to credits
  const sellAll = () => {
    dispatch(addCredits(userwater * 2));
    dispatch(sellwater());
  };

  /* {water === 40 ? <h3> show </h3> : ""} */

  return (
    <Wrapper className="row center-xs">
      <div className="col-xs-12">
        <p>Water: {userwater}</p>
        <p>Cash: {usercredits} cr.</p>

        <button>{userwater}</button>
        <button onClick={() => dispatch(addwater())}>Take Free Water</button>
        <button onClick={sellAll}>Sell all the water</button>
      </div>
      <div className="col-xs-12">
        <System></System>
      </div>

      <GalacticChartTitle className="col-xs-12">
        <h3>Galactic Chart</h3>
      </GalacticChartTitle>
      <MiniMapWrapper className="row center-xs">
        <Map className="col-xs-12"></Map>
      </MiniMapWrapper>
    </Wrapper>
  );
}

export default App;
