import React from "react";
import BasicStats from "./BasicStats";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FinalSubmit from "./FinalSubmit";
import "./App.css";

// import styled from "styled-components";

// Add to state
// Add update callback function
// update connected components

class App extends React.Component {
  state = {
    name: "",
    age: "",
    race: ""
  };

  updateName = name => {
    console.log(name);
    this.setState({ name });
  };

  updateAge = age => {
    console.log(age);
    this.setState({ age });
  };

  updateRace = race => {
    this.setState({ race });
  };

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("age", JSON.stringify(nextState.age));
    localStorage.setItem("name", JSON.stringify(nextState.name));
    localStorage.setItem("race", JSON.stringify(nextState.race));
  }

  componentWillMount() {
    localStorage.getItem("age") &&
      this.setState({
        age: JSON.parse(localStorage.getItem("age"))
      });

    localStorage.getItem("name") &&
      this.setState({
        name: JSON.parse(localStorage.getItem("name"))
      });

    localStorage.getItem("race") &&
      this.setState({
        race: JSON.parse(localStorage.getItem("race"))
      });
  }

  render() {
    const ConnectedBasicStats = props => (
      <BasicStats
        updateName={this.updateName}
        updateAge={this.updateAge}
        updateRace={this.updateRace}
        {...props}
      />
    );

    const ConnectedFinalSubmit = () => (
      <FinalSubmit
        name={this.state.name}
        age={this.state.age}
        race={this.state.race}
      />
    );

    return (
      <Router>
        <Route path="/" exact component={ConnectedBasicStats} />
        <Route
          path="/finalsubmit"
          name={this.state.name}
          age={this.state.age}
          race={this.state.race}
          component={ConnectedFinalSubmit}
        />
      </Router>
    );
  }
}

export default App;
