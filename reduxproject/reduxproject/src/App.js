import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import { addwater } from "./marketplace/water.action"; //actions
import { sellwater } from "./marketplace/water.action";
import { addCredits } from "./user/credits.action";

function App() {
  // reducers
  const water = useSelector(state => state.water);
  const usercredits = useSelector(state => state.usercredits);

  // Dispatch
  const dispatch = useDispatch();

  // function multiplies water * 2 and adds amount to credits
  const sellAll = () => {
    dispatch(addCredits(water * 2));
    dispatch(sellwater());
  };

  return (
    <div className="App">
      {/* {water === 40 ? <h3>yes is cool</h3> : ""} */}
      <p>Cash: {usercredits} cr.</p>
      <button>{water}</button>
      <button onClick={() => dispatch(addwater())}>Take Free Water</button>
      <button onClick={sellAll}>Sell all the water</button>
    </div>
  );
}

export default App;
