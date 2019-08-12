import React, { Component } from "react";
import styled from "styled-components";

const FooterStyle = styled.section`
  background: #3d8d62;
  color: #fff;
`;

export default class Footer extends Component {
  render() {
    return (
      <FooterStyle>
        <div className="container">
          <div className="row center-xs center-sm center-md center-lg">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <p>Copyright &copy; 2019 | AppTheme</p>
            </div>
          </div>
        </div>
      </FooterStyle>
    );
  }
}
