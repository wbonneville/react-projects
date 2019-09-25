import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class FinalSubmit extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.age}</h2>
        <h2>{this.props.race}</h2>
        <Link to="/">Back to input</Link>
      </div>
    );
  }
}
