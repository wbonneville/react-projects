import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Canvas = styled.canvas`
  background-color: #f6f6f6;
  width: 400px;
  height: 200px;
`;

export default class CanvasComponent extends React.Component {
  componentDidMount() {
    this.updateCircles();
  }

  updateCircles() {
    const ctx = this.refs.canvas.getContext("2d");
    ctx.beginPath();
    for (var i = 0; i < 80; i++) {
      const x = Math.floor(Math.random() * this.refs.canvas.width);
      const y = Math.floor(Math.random() * this.refs.canvas.height);
      ctx.moveTo(x, y);
      ctx.arc(x, y, 3, 0, Math.PI * 2);
    }
    ctx.fillStyle = "green";
    ctx.fill();
  }
  render() {
    return <Canvas ref="canvas" width={800} height={400}></Canvas>;
  }
}

ReactDOM.render(<CanvasComponent />, document.getElementById("root"));
