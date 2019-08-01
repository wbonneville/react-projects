import React, { Component } from "react";

export default class Company extends Component {
  render() {
    return (
      <section id="company">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <i class="fa fa-chess-bishop" /> (123)-456-7654
                </li>
                <li>
                  <i class="fa fa-chess-bishop" /> kudzu@plantdesign.com
                </li>
                <li>
                  <i class="fa fa-chess-bishop" /> 5000 Plant Street{" "}
                </li>
              </ul>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <h4>About us</h4>
              <p>
                Kudzu (/ˈkʊdzuː/; also called Japanese arrowroot)[1][2] is a
                group of plants in the genus Pueraria, in the pea family
                Fabaceae, subfamily Faboideae. They are climbing, coiling, and
                trailing perennial vines native to much of eastern Asia,
                Southeast Asia, and some Pacific islands.[2] The name is derived
                from the Japanese name for the plant East Asian arrowroot
                (Pueraria montana var. lobata), クズ or 葛 (kuzu).{" "}
              </p>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <h4>Newsletter</h4>
              <p>
                Kudzu spreads by vegetative reproduction via stolons (runners)
                that root at the nodes to form new plants and by rhizomes.
              </p>
              <form>
                <input type="text" name="email" placeholder="Enter Email" />
                <button type="submit" name="button">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
