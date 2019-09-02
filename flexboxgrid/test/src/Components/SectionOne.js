import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";

function GridOne() {
  return (
    <div>
      <Grid>
        <Row>
          <Col xs={5}>
            <h1>Testing</h1>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
