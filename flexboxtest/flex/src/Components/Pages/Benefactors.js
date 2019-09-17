import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  font-size: 23px;
  margin-left: 7%;
  margin-right: 7%;
  margin-top: 4%;
  margin-bottom: 5%;

  & h4 {
    font-weight: 100;
    margin-top: -2%;
  }
`;

export default class Housing extends Component {
  render() {
    return (
      <Div className="row start-xs">
        <div className="col-xs-10">
          <h1>Benefactors</h1>
          <h4>September 16th, 2019</h4>
          <p>
            We’ve checked out your predictions for this year’s City Data
            Portfolio survey, and of course we’ve mixed our own predictions with
            theirs. Some were bad. Things are looking up in the world of data,
            in fact. The annual survey has traditionally forecast where economic
            growth, population growth, job creation and the like are headed. And
            while this year we predict “roughly flat GDP growth,” and some of
            the population growth is “under-estimating the rate of increase,”
            we’re expecting population increases of more than 2 percent. This is
            likely to result in many new people, jobs and startups in City 17.
            We’ve added new questions about top concerns to make it more
            interactive this year, and just a sampling: Will home prices reach
            or exceed the all-time high of $113,625, adjusted for inflation?
            Will you expect the median price of a home to reach or exceed the
            all-time high of $135,000? Will jobs be described as “steady” or
            “dynamic”? Will the unemployment rate be described as “unusually
            low” or “unexpectedly high”? Will business owners be described as
            “lucky” or “job creators”? Remember to check back in August. We’ll
            have a comprehensive economic forecast for the entire area of City
            17, and if we’re correct, this will be the best forecast in five
            years!
          </p>
        </div>
      </Div>
    );
  }
}
