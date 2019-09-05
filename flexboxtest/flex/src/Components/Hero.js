import React, { Component } from "react";
import image from "../images/city1.jpeg";
import styled from "styled-components";
import newsimg1 from "../images/art2.jpg";
import bignewsimg from "../images/city3.jpg";

const HeroWrapper = styled.div`
  font-family: "Futura";

  & .middlesection {
    display: flex;
    color: white;
    font-size: 35px;
    margin-top: 5rem;
   

    @media (max-width: 1000px) {
        flex-direction: column;
        justify-content: center;
        align-content: center;
        & .classStories {
            order: 2;
        }
        & .classImage
        max-width: 100%;
     
      }
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

const BigNewsImg = styled.img`
  align-content: center;
  height: 400px;
  max-width: 100%;
  margin-top: 3.5rem;
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
                  <div className="row center-xs middlesection">
                    <LatestStories className="col-xs-4 flexme classStories">
                      <h5>Latest Stories</h5>
                    </LatestStories>
                    <div className="col-xs-8 flexme">
                      <BigNewsImg
                        className="classImage"
                        src={bignewsimg}
                      ></BigNewsImg>
                    </div>
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
