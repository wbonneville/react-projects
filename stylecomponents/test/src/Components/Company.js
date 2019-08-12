import React, { Component } from "react";
import styled from "styled-components";

const CompanyStyle = styled.section`
  background: #333;
  color: #fff;
  padding: 10px 0;

  & h4 {
    text-transform: uppercase;
    margin-bottom: 0;
  }

  & ul {
    padding: 0;
    list-style: none;
    line-height: 2em;
  }

  & input[type="text"] {
    padding: 7px;
  }

  & button {
    background: #222;
    color: #fff;
    padding: 10px;
    border: 0;
  }
`;

export default class Company extends Component {
  render() {
    return (
      <CompanyStyle>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <i className="fa fa-chess-bishop" /> (123)-456-7654
                </li>
                <li>
                  <i className="fa fa-chess-bishop" /> kudzu@plantdesign.com
                </li>
                <li>
                  <i className="fa fa-chess-bishop" /> 5000 Plant Street{" "}
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
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
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
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
      </CompanyStyle>
    );
  }
}
