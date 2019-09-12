import React, { Component } from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  padding: 40px;
  padding-left: 20%;
  background: black;
  color: white;
`;

const ListWrapper = styled.div`
  padding-right: 20%;
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
        <ListWrapper className="row">
          <div className="col-xs-3">
            <h4>Lists</h4>
            <hr></hr>
            <p>10 Breakthrough Technologies</p>
            <p>35 Innovators Under 35</p>
            <p>50 Smartest Companies</p>
          </div>
          <div className="col-xs-3">
            <h4>More</h4>
            <hr></hr>
            <p>Business Lab podcast</p>
            <p>Custom content</p>
          </div>
          <div className="col-xs-3">
            <h4>Company</h4>
            <hr></hr>
            <p>About us</p>
            <p>Advertise with us</p>
            <p>Careers</p>
            <p>Insights</p>
            <p>International editions</p>
          </div>
          <div className="col-xs-3">
            <h4>Policies</h4>
            <hr></hr>
            <p>About us</p>
            <p>Advertise with us</p>
            <p>Careers</p>
            <p>Insights</p>
            <p>International editions</p>
          </div>
        </ListWrapper>
        <div className="row bottom-xs">
          <div className="col-xs-12">
            <h4>yeah</h4>
          </div>
        </div>
      </FooterWrapper>
    );
  }
}
