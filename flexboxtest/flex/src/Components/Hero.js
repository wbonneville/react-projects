import React, { Component } from "react";
import image from "../images/teamwork.png";
import styled from "styled-components";
import newsimg1 from "../images/art2.jpg";

const HeroWrapper = styled.div`
  font-family: "Futura";
`;

const Image = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)),
    url(${image});
  background-size: cover;
  margin-top: -16px;
  & .slide {
    height: 1100px;
  }
`;

const Welcome = styled.h1`
  color: white;
  font-size: 75px;
`;

const Slogan = styled.h2`
  color: white;
  font-size: 20px;
`;

const LatestStories = styled.div`
  margin-top: 5rem;
  color: white;
  font-size: 35px;
`;

const Stories = styled.div`
  margin-top: 1rem;
  margin-left: 8rem;
  color: white;
  font-size: 15px;
  display: flex;
`;

const NewsImage = styled.img`
  height: 100px;
  width: 100px;
  margin-right: 1.5rem;
`;
export default class Hero extends Component {
  render() {
    return (
      <HeroWrapper>
        <Image>
          <div className="row">
            {/* Column 1 */}
            <div className="col-xs-12">
              <div className="row center-xs slide">
                {/* Column 2 */}
                <div className="col-xs-12">
                  <Welcome>Welcome.</Welcome>
                  <Slogan>It's great to part of the greater good.</Slogan>
                  {/* Column 3 */}
                  <LatestStories className="col-xs-5">
                    <h5>Latest Stories</h5>
                  </LatestStories>
                  {/* Column 4 */}
                  <Stories className="col-xs-4">
                    <NewsImage src={newsimg1}></NewsImage>
                    <div>
                      <strong>Environment</strong>
                      <p>bla bla bla</p>
                    </div>
                  </Stories>
                  <Stories className="col-xs-4">
                    <NewsImage src={newsimg1}></NewsImage>
                    <div>
                      <strong>Environment</strong>
                      <p>bla bla bla</p>
                    </div>
                  </Stories>
                  <Stories className="col-xs-4">
                    <NewsImage src={newsimg1}></NewsImage>
                    <div>
                      <strong>Environment</strong>
                      <p>bla bla bla</p>
                    </div>
                  </Stories>
                  <Stories className="col-xs-4">
                    <NewsImage src={newsimg1}></NewsImage>
                    <div>
                      <strong>Environment</strong>
                      <p>bla bla bla</p>
                    </div>
                  </Stories>
                  <Stories className="col-xs-4">
                    <NewsImage src={newsimg1}></NewsImage>
                    <div>
                      <strong>Environment</strong>
                      <p>bla bla bla</p>
                    </div>
                  </Stories>
                </div>
              </div>
            </div>
          </div>
        </Image>
      </HeroWrapper>
    );
  }
}
