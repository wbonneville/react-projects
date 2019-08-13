import React, { Component } from "react";
import styled from "styled-components";

import clipart2 from "../images/clipart2.png";
import unsplash1 from "../images/unsplash1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoSectionStyle = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${unsplash1}) no-repeat center;

  & h2 {
    font-size: 30px;
    margin: 5;
    padding-bottom: 10px;
    color: white;
  }

  & ul {
    list-style: none;
    padding: 0px;
  }

  & li {
    line-height: 2em;
    font-size: 18px;
    color: white;
  }
`;

const FeatureImage = styled.img`
  width: 350px;
`;

export default class Infosection extends Component {
  render() {
    return (
      <InfoSectionStyle>
        <div className="container">
          <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <FeatureImage className="clipart" src={clipart2} alt="" />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h2>Core Features</h2>
              <ul>
                <li>
                  <FontAwesomeIcon icon="check" /> Fully Optimized
                </li>
                <li>
                  <FontAwesomeIcon icon="check" /> Extreme Growth
                </li>
                <li>
                  <FontAwesomeIcon icon="check" /> Improves Neighbours View
                </li>
                <li>
                  <FontAwesomeIcon icon="check" /> Provides Overall Healthiness
                </li>
                <li>
                  <FontAwesomeIcon icon="check" /> Grows Herbs
                </li>
                <li>
                  <FontAwesomeIcon icon="check" /> Grows Vegetables
                </li>
              </ul>
            </div>
          </div>
        </div>
      </InfoSectionStyle>
    );
  }
}
