import React from "react";
import BasicStats from "./BasicStats";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FinalSubmit from "./FinalSubmit";
import "./App.css";

// import styled from "styled-components";

class App extends React.Component {
  state = {
    name: "",
    age: ""
  };

  updateName = name => {
    console.log(name);
    this.setState({ name });
  };

  updateAge = age => {
    console.log(age);
    this.setState({ age });
  };

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("age", JSON.stringify(nextState.age));
  }

  componentWillMount() {
    localStorage.getItem("age") &&
      this.setState({
        age: JSON.parse(localStorage.getItem("age"))
      });
  }

  render() {
    const ConnectedBasicStats = props => (
      <BasicStats
        updateName={this.updateName}
        updateAge={this.updateAge}
        {...props}
      />
    );

    const ConnectedFinalSubmit = () => (
      <FinalSubmit name={this.state.name} age={this.state.age} />
    );

    return (
      <Router>
        <Route path="/" exact component={ConnectedBasicStats} />
        <Route
          path="/finalsubmit"
          name={this.state.name}
          age={this.state.age}
          component={ConnectedFinalSubmit}
        />
      </Router>
    );
  }
}

export default App;
