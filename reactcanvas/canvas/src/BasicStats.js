import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BasicStats extends Component {
  constructor(props) {
    super(props);
    this.state = { namevalue: "", agevalue: "", racevalue: "" };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleRaceChange = this.handleRaceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // TYPE IN NAME TO CHANGE

  handleNameChange(event) {
    this.setState({
      namevalue: event.target.value
    });
  }

  // TYPE IN AGE TO CHANGE

  handleAgeChange(event) {
    this.setState({
      agevalue: event.target.value
    });
  }

  // TYPE IN RACE TO CHANGE

  handleRaceChange(event) {
    this.setState({
      racevalue: event.target.value
    });
  }

  // HANDLE SUBMIT

  handleSubmit(event) {
    this.props.updateName(this.state.namevalue);
    this.props.updateAge(this.state.agevalue);
    this.props.updateRace(this.state.racevalue);

    this.props.history.push("/finalsubmit");
    event.preventDefault();
  }

  // Add label
  // Add event listener
  // Add to state
  // Bind

  render() {
    return (
      <React.Fragment>
        <div className="row center-xs">
          <div className="col-xs-12 ">
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  namevalue={this.state.namevalue}
                  onChange={this.handleNameChange}
                />
              </label>
              <label>
                Age:
                <input
                  type="text"
                  agevalue={this.state.agevalue}
                  onChange={this.handleAgeChange}
                />
              </label>
              <label>
                Race:
                <input
                  type="text"
                  racevalue={this.state.racevalue}
                  onChange={this.handleRaceChange}
                />
              </label>
              <input
                type="submit"
                value="Click me"
                onClick={this.handleSubmit}
              ></input>
            </form>
          </div>
          <div>
            <h1>{this.state.namevalue}</h1>
            <h1>{this.state.agevalue}</h1>
            <h1>{this.state.racevalue}</h1>

            <Link to="/finalsubmit">Back to final submit page</Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
