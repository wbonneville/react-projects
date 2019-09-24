import React, { Component } from "react";

export default class BasicStats extends Component {
  constructor(props) {
    super(props);
    this.state = { namevalue: "", agevalue: "" };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      namevalue: event.target.value
    });
  }

  handleAgeChange(event) {
    this.setState({
      agevalue: event.target.value
    });
  }

  handleSubmit(event) {
    this.props.updateName(this.state.namevalue);
    this.props.updateAge(this.state.agevalue);

    this.props.history.push("/finalsubmit");
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <div>
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
        </div>
      </React.Fragment>
    );
  }
}
