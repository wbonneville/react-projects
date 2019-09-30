import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import { addwater } from "./marketplace/water.action"; //actions
import { sellall } from "./marketplace/water.action";
// import { credits } from "./user/credits.action";

function App() {
  const water = useSelector(state => state.water); // reducers
  const usercredits = useSelector(state => state.usercredits);

  const dispatch = useDispatch(); // Dispatch uses actions

  return (
    <div className="App">
      {/* {water === 40 ? <h3>yes is cool</h3> : ""} */}
      <p>Cash: {usercredits} cr.</p>
      <button>{water}</button>
      <button onClick={() => dispatch(addwater())}>Take Free Water</button>
      <button onClick={() => dispatch(sellall())}>Sell all the water</button>
    </div>
  );
}

export default App;
