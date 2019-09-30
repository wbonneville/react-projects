import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, notcool } from "./actions"; // actions

function App() {
  const counter = useSelector(state => state.counter); // reducers
  const iscool = useSelector(state => state.iscool); // reducers

  const dispatch = useDispatch(); // Dispatch uses actions

  return (
    <div className="App">
      <h1>Counter = {counter}</h1>
      {iscool ? <h3>yes is cool</h3> : ""}
      <button onClick={() => dispatch(notcool())}>Make uncool</button>
      <button onClick={() => dispatch(increment(1.5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
