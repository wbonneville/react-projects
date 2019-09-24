import React from "react";
import BasicStats from "./BasicStats";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FinalSubmit from "./FinalSubmit";
import "./App.css";

// import styled from "styled-components";

class App extends React.Component {
  state = {
    name: "crackerjack"
  };

  updateName = name => {
    console.log(name);
    this.setState({ name });
  };

  render() {
    const ConnectedBasicStats = props => (
      <BasicStats updateName={this.updateName} {...props} />
    );

    const ConnectedFinalSubmit = props => (
      <FinalSubmit name={this.state.name} {...props} />
    );

    return (
      <Router>
        <Route path="/" exact component={ConnectedBasicStats} />
        <Route
          path="/finalsubmit"
          name={this.state.name}
          component={ConnectedFinalSubmit}
        />
      </Router>
    );
  }
}

export default App;
