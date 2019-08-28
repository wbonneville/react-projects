import React, { Component } from "react";
import styled from "styled-components";

const NewsSection = styled.section`
  font-family: "Roboto";
  margin-top: 40px;
  & a {
    color: black;
  }
`;

export default class News extends Component {
  render() {
    return (
      <NewsSection class="blog-cat mt-5 pb-5">
        <div class="container mb-5">
          <div class="text-center container-less resources-feed-heading">
            <h1>Breencast</h1>
            <br />
            <h2 class="news-feed-heading h1 lead">
              A Breencast is a regular broadcast made by Dr. Wallace Breen,
              delivered to the populace of City 17 (and possibly other Combine
              controlled towns and cities) via private televisions and, more
              commonly, large video monitors mounted on walls in public places
              such as town squares and railway stations.
            </h2>
          </div>
        </div>
        <div
          class="fullbar-item w-100 cursor-pointer"
          onclick="location.href='#'"
        >
          <div class="container">
            <div class="row py-3 py-md-5 align-items-center border-top">
              <div class="col-md-10">
                <h3 class="feed-item-heading m-0 font-weight-800">
                  <a class="text-black" href="#">
                    "Dear Dr. Breen. Why has the Combine seen fit to suppress
                    our reproductive cycle? Sincerely, A Concerned Citizen."
                  </a>
                </h3>
              </div>
              <div class="col-md-2">
                <p class="m-0 text-pink text-uppercase">April 02, 2018</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="fullbar-item w-100 cursor-pointer"
          onclick="location.href='#'"
        >
          <div class="container">
            <div class="row py-3 py-md-5 align-items-center border-top">
              <div class="col-md-10">
                <h3 class="feed-item-heading  m-0 font-weight-800">
                  <a class="text-black" href="#">
                    We now have direct confirmation of a disruptor in our midst,
                    one who has acquired an almost messianic reputation in the
                    minds of certain citizens. His figure is synonymous with the
                    darkest urges of instinct, ignorance and decay.
                  </a>
                </h3>
              </div>
              <div class="col-md-2">
                <p class="m-0 text-pink text-uppercase">January 30, 2018</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="fullbar-item w-100 cursor-pointer"
          onclick="location.href='#'"
        >
          <div class="container">
            <div class="row py-3 py-md-5 align-items-center border-top">
              <div class="col-md-10">
                <h3 class="feed-item-heading  m-0 font-weight-800">
                  <a class="text-black" href="#">
                    I have been asked to say a few words to the transhuman arm
                    of Sector Seventeen Overwatch, concerning recent successes
                    in containing members of the resistance Science Team.
                  </a>
                </h3>
              </div>
              <div class="col-md-2">
                <p class="m-0 text-pink text-uppercase">Janurary 18, 2018</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="fullbar-item w-100 cursor-pointer"
          onclick="location.href='#'"
        >
          <div class="container">
            <div class="row py-3 py-md-5 align-items-center border-top">
              <div class="col-md-10">
                <h3 class="feed-item-heading  m-0 font-weight-800">
                  <a class="text-black" href="#">
                    In order to be true to our nature, and our destiny, we must
                    aspire to greater things. We have outgrown our cradle. It is
                    futile to cry for mother's milk, when our true sustenance
                    awaits us among the stars. And only the universal union that
                    small minds call 'The Combine' can carry us there.
                  </a>
                </h3>
              </div>
              <div class="col-md-2">
                <p class="m-0 text-pink text-uppercase">December 05, 2017</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="fullbar-item w-100 cursor-pointer"
          onclick="location.href='#'"
        >
          <div class="container">
            <div class="row py-3 py-md-5 align-items-center border-top">
              <div class="col-md-10">
                <h3 class="feed-item-heading  m-0 font-weight-800">
                  <a class="text-black" href="#">
                    Adrian Shephard returns thanks to the Vortigaunts, in a
                    gambit to use him to buy Gordon Freeman time to find Wallace
                    Breen and keep his Overwatch pursuers at bay.
                  </a>
                </h3>
              </div>
              <div class="col-md-2">
                <p class="m-0 text-pink text-uppercase">November 23, 2017</p>
              </div>
            </div>
          </div>
        </div>
      </NewsSection>
    );
  }
}
