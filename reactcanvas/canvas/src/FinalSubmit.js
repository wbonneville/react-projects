import React, { Component } from "react";
import BasicStats from "./BasicStats";

export default class FinalSubmit extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.name}</div>;
  }
}
