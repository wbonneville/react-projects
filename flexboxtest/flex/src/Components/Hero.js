import React, { Component } from "react";
import image from "../images/wallhaven.jpg";
import styled from "styled-components";
import newsimg1 from "../images/wallhaven.jpg";
import bignewsimg from "../images/city3.jpg";

const HeroWrapper = styled.div`
  font-family: "SF-Mono";

  justify-content: center;

  & .middlesection {
    display: flex;
    color: white;
    font-size: 34px;
    margin-top: 5rem;

    & .bigNews {
      flex-basis: 50%;
    }

    @media (max-width: 1200px) {
      flex-direction: column;
      justify-content: center;
      align-content: center;

      & .bigNews {
        align-content: center;
      }

      & .classStories {
        order: 2;
      }
    }
  }
`;

const Image = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)),
    url(${image});
  background-size: cover;
  margin-top: -16px;
  & .slide {
    height: 1150px;
  }

  @media (max-width: 1200px) {
    height: 1400px;
  }
`;

const Welcome = styled.h1`
  margin-top: 8rem;
  color: white;
  font-size: 100px;
`;

const Slogan = styled.h2`
  color: white;
  font-size: 20px;
`;

const Stories = styled.div`
  margin-top: 2rem;
  margin-left: 4rem;
  color: white;
  font-size: 15px;
  flex-direction: row;
  width: 500px;

  @media (max-width: 250px) {
    font-size: 12px;
    width: 350px;
  }

  @media (max-width: 400px) {
    margin-left: 5px;
  }

  @media (max-width: 700px) {
    margin-left: 20px;
  }
  @media (max-width: 1100px) {
    margin-left: 1rem;
  }
`;

const LatestStories = styled.div`
  color: white;
  font-size: 35px;

  @media (max-width: 250px) {
    margin-left: -10px;
    font-size: 25px;
  }
`;
const NewsImage = styled.img`
  height: 100px;
  width: 100px;
  margin-right: 1.5rem;
  @media (max-width: 400px) {
    height: 75px;
    width: 75px;
  }
`;

const BigNewsImgWrapper = styled.div`
  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
`;

const BigNewsImg = styled.div`
  background-image: url(${bignewsimg});
  background-size: cover;
  align-content: center;
  justify-content: center;
  text-align: center;
  height: 400px;
  width: 600px;
  margin-top: 3.5rem;
  border: 1px solid white;

  & .pdiv {
    line-height: 35rem;
  }

  @media (max-width: 700px) {
    max-width: 99.9999%;
  }
`;

export default class Hero extends Component {
  render() {
    return (
      <HeroWrapper className="herowrapper">
        <Image>
          <div className="row">
            {/* Column 1 */}
            <div className="col-xs-12">
              <div className="row center-xs slide">
                {/* Column 2 */}
                <div className="col-xs-12">
                  <Welcome>Welcome.</Welcome>
                  <Slogan>Lorem ipsum dorem set irom lierum.</Slogan>
                  {/* Column 3 */}
                  <div className="row around-xs center-xs middlesection">
                    <LatestStories className="col-xs-3 latestStories classStories">
                      <h5>Latest Stories</h5>
                      <Stories className="row start-xs stories">
                        <NewsImage src={newsimg1}></NewsImage>
                        <div>
                          <strong>Lorem</strong>
                          <p>Lorem ipsum dolor sit amet </p>
                        </div>
                      </Stories>
                      <Stories className="row start-xs stories">
                        <NewsImage src={newsimg1}></NewsImage>
                        <div>
                          <strong>Ipsum</strong>
                          <p>Lorem ipsum dolor sit amet </p>
                        </div>
                      </Stories>
                      <Stories className="row start-xs stories">
                        <NewsImage src={newsimg1}></NewsImage>
                        <div>
                          <strong>Dolor</strong>
                          <p>Lorem ipsum dolor sit amet </p>
                        </div>
                      </Stories>
                    </LatestStories>

                    <BigNewsImgWrapper className="col-xs-9 bigNews">
                      <BigNewsImg></BigNewsImg>
                    </BigNewsImgWrapper>
                  </div>
                  {/* Column 4 */}
                </div>
              </div>
            </div>
          </div>
        </Image>
      </HeroWrapper>
    );
  }
}
