import React, { Component } from "react";

export default class Features extends Component {
  render() {
    return (
      <section id="features">
        <div class="container">
          <div class="row center-xs center-sm center-md center-lg">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2>Core Features</h2>
              <p>What's Included</p>

              <div class="row center-xs center-sm center-md center-lg">
                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <i class="fab fa-500px" />
                  <br />
                  <h4>Fully Optimized</h4>
                  <p>
                    {" "}
                    Kudzu fiber has long been used for fiber art and basketry.{" "}
                  </p>
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <i class="fas fa-chess-bishop" />
                  <br />
                  <h4>Free Support</h4>
                  <p>
                    {" "}
                    The roots contain starch, which has traditionally been used
                    as a food ingredient in East Asia.{" "}
                  </p>
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <i class="fas fa-barcode" />
                  <br />
                  <h4>Free Upgrades</h4>
                  <p>
                    {" "}
                    Kudzu's environmental and ecological damage results from its
                    outcompeting other species for a resource.{" "}
                  </p>
                </div>
              </div>

              <div class="row center-xs center-sm center-md center-lg">
                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <i class="fas fa-cloud-sun-rain" />
                  <br />
                  <h4>Uptime Guarantee</h4>
                  <p>
                    Kudzu has been used as a form of erosion control and to
                    enhance the soil.{" "}
                  </p>
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <i class="fa fa-users" />
                  <br />
                  <h4>Multi-User</h4>
                  <p>
                    As a legume, it increases the nitrogen in the soil by a
                    symbiotic relationship with nitrogen-fixing bacteria.{" "}
                  </p>
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <i class="fa fa-plug" />
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
      </section>
    );
  }
}
