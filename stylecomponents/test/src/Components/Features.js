import React, { Component } from "react";
import styled from "styled-components";

const FeaturesStyle = styled.div`
  & h2 {
    font-size: 35px;
    margin: 0;
    padding-bottom: 10px;
  }

  & p {
    color: #888;
    margin: 0;
    margin-bottom: 40px;
  }

  & .fa {
    font-size: 60px;
    color: #3d8d62;
  }

  & .fas {
    font-size: 60px;
    color: #3d8d62;
  }

  & .fab {
    font-size: 60px;
    color: #3d8d62;
  }

  & .far {
    font-size: 60px;
    color: #3d8d62;
  }
`;

export default class Features extends Component {
  render() {
    return (
      <FeaturesStyle>
        <div className="container">
          <div className="row center-xs center-sm center-md center-lg">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2>Core Features</h2>
              <p>What's Included</p>

              <div className="row center-xs center-sm center-md center-lg">
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <i className="fab fa-500px" />
                  <br />
                  <h4>Fully Optimized</h4>
                  <p>
                    {" "}
                    Kudzu fiber has long been used for fiber art and basketry.{" "}
                  </p>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <i className="fas fa-chess-bishop" />
                  <br />
                  <h4>Free Support</h4>
                  <p>
                    {" "}
                    The roots contain starch, which has traditionally been used
                    as a food ingredient in East Asia.{" "}
                  </p>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <i className="fas fa-barcode" />
                  <br />
                  <h4>Free Upgrades</h4>
                  <p>
                    {" "}
                    Kudzu's environmental and ecological damage results from its
                    outcompeting other species for a resource.{" "}
                  </p>
                </div>
              </div>

              <div className="row center-xs center-sm center-md center-lg">
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <i className="fas fa-cloud-sun-rain" />
                  <br />
                  <h4>Uptime Guarantee</h4>
                  <p>
                    Kudzu has been used as a form of erosion control and to
                    enhance the soil.{" "}
                  </p>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <i className="fa fa-users" />
                  <br />
                  <h4>Multi-User</h4>
                  <p>
                    As a legume, it increases the nitrogen in the soil by a
                    symbiotic relationship with nitrogen-fixing bacteria.{" "}
                  </p>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <i className="fa fa-plug" />
                  <br />
                  <h4>Plug and Play</h4>
                  <p>
                    {" "}
                    Kudzu can be used by grazing animals, as it is high in
                    quality as a forage and palatable to livestock.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FeaturesStyle>
    );
  }
}
