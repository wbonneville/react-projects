import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FormWrapper = styled.div``;
const StatInput = styled.input`
  font-size: 20px;
  margin-top: 1%;
  background-color: white;
  border: none;
  color: black;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
`;
const SubmitInput = styled.input`
  font-size: 24px;
  margin-top: 2%;
  margin-bottom: 4%;
  background-color: white;
  border: none;
  color: black;
  padding: 8px 16px;
  text-decoration: none;
  width: 100px;
  font-weight: 100;

  cursor: pointer;
`;

const Label = styled.label`
  color: white;
  & h2 {
    margin-bottom: 1%;
    font-weight: 100;
    font-size: 40px;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  border: 1px solid white;
  padding: 10px;
`;

const LinkDiv = styled.div`
  margin-bottom: 5%;
`;

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
        <FormWrapper className="row center-xs">
          <div className="col-xs-12">
            <form onSubmit={this.handleSubmit}>
              <Label>
                <h2> Select a Name</h2>
                <StatInput
                  type="text"
                  namevalue={this.state.namevalue}
                  onChange={this.handleNameChange}
                />
              </Label>
            </form>
          </div>
          <div className="col-xs-12">
            <form>
              <Label>
                <h2>Select an Age</h2>
                <StatInput
                  type="text"
                  agevalue={this.state.agevalue}
                  onChange={this.handleAgeChange}
                />
              </Label>
            </form>
          </div>
          <div className="col-xs-12">
            <form>
              <Label>
                <h2>Select a Race</h2>
                <StatInput
                  type="text"
                  racevalue={this.state.racevalue}
                  onChange={this.handleRaceChange}
                />
              </Label>
            </form>
          </div>
          <div className="col-xs-12">
            <form>
              <SubmitInput
                type="submit"
                value="Submit"
                onClick={this.handleSubmit}
              ></SubmitInput>
            </form>
          </div>
          <LinkDiv>
            <StyledLink to="/finalsubmit">Back to Final Submission</StyledLink>
          </LinkDiv>
        </FormWrapper>
      </React.Fragment>
    );
  }
}
