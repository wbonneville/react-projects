import React, { Component } from "react";

export default class Character extends Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      status: props.initialStatus
    };
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 1
    });
  }

  onChangeStatus() {
    this.setState({
      status: (this.state.status = "not critical")
    });
  }

  render() {
    return (
      <div className="row center-xs">
        <div className="col-xs-7">
          <h1>
            This is {this.props.name}. He is {this.state.age} years old and his
            status is {this.state.status}. His transformation is{" "}
            {this.props.transformation}
          </h1>
          <button onClick={() => this.onMakeOlder()}>Update Age</button>
          <button onClick={() => this.onChangeStatus()}>Update Status</button>
        </div>
      </div>
    );
  }
}
