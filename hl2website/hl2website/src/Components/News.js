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
            <h1 class="in-news h3 text-red">Solodev In The News</h1>
            <h2 class="news-feed-heading h1 lead">
              Solodev CDO on Key Marketing Considerations in Choosing a CMS
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
                    Solodev Ranked as High Performer on G2 Crowd’s Spring 2018
                    Web Content Management Grid
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
                    Solodev Earns “Highest Ranking Software Tool” for State of
                    Florida in Nationwide G2 Crowd Study
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
                    City of Miami Beach Launches Enticing Website to Match
                    Vibrant City
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
                    Solodev Earns National Recognition as Marketing and Commerce
                    CMS Leader
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
                    Solodev Helps Power American Dairy Association North East's
                    Online Passions
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
