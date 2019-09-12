import React, { Component } from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  padding: 40px;
  padding-left: 20%;
  background: black;
  color: white;
`;

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <div className="row">
          <div className=" col-xs-10">
            <h1>MIT Technology Review</h1>
            <p>
              The mission of MIT Technology Review is to bring about
              better-informed and more conscious decisions about technology
              through authoritative, influential, and trustworthy journalism.
            </p>
          </div>
          <div className="col-xs-2">
            <h2>Browse International Editions</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2">
            <h4>yee</h4>
          </div>
          <div className="col-xs-2">
            <h4>yee</h4>
          </div>
          <div className="col-xs-2">
            <h4>yee</h4>
          </div>
          <div className="col-xs-2">
            <h4>yee</h4>
          </div>
          <div className="col-xs-2">
            <h4>yee</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12"></div>
        </div>
      </FooterWrapper>
    );
  }
}
