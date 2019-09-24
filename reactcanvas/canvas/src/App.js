import React from "react";
import BasicStats from "./BasicStats";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FinalSubmit from "./FinalSubmit";
import "./App.css";

// import styled from "styled-components";

function App() {
  return (
    <React.Fragment>
      <div>
        <Router>
          <Route path="/" exact component={BasicStats} />
          <Switch>
            <Route path="/finalsubmit" component={FinalSubmit} />
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
