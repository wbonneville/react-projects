import React, { Component } from "react";
import styled from "styled-components";
import image from "../images/wallhaven.jpg";
import image2 from "../images/yellowcity.jpg";
import bannergif from "../images/gif3.gif";

const HeroWrapper = styled.div`
  margin-top: 0;
`;

const HeroRow = styled.div``;

const Left = styled.div`
  background-color: black;
  color: white;
  padding: 0 0;

  & h1 {
    font-size: 45px;
    text-align: left;
    font-weight: 800;
    padding: 2%;
  }

  & h4 {
    text-align: left;
    font-size: 20px;
    font-weight: 300;
    padding: 2%;
    margin-top: -2rem;
  }
`;

const Right = styled.div`
  & h1 {
    font-size: 35px;
    font-weight: 800;
  }

  & h4 {
    font-size: 18px;
    text-align: left;
  }
`;

const Image = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)),
    url(${image});
  background-size: cover;
  height: 479px;
`;

const ImageTwo = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)),
    url(${image2});
  background-size: cover;
  height: 350px;
  margin-left: 4%;
  box-shadow: 4px 4px 4px #ccc;
`;

const PanelWrapper = styled.div`
  margin: 4%;
`;

const Panel = styled.div`
  background-color: black;
  color: white;
  margin-left: 4%;

  padding-bottom: 2%;
  & h1 {
    font-size: 45px;
    padding-top: 3%;
  }
  & h2 {
    margin-top: -10px;
    font-size: 18px;
    font-weight: 100;
    text-align: left;
    padding: 20px;
  }
`;

const Text = styled.div`
  background-color: black;
`;

const Header = styled.div`
  color: white;
  margin: 4%;
  & h1 {
    font-size: 60px;
    font-weight: 800;
    letter-spacing: 2px;
  }
  & h4 {
    font-weight: 200;
    font-size: 20px;
  }
`;

const SectionFour = styled.div`
  margin-top: 6%;
  margin-bottom: 6%;
  background: black;
  padding: 50px;
  margin-left: -0.7%;
`;

const Slogan = styled.div`
  & h1 {
    color: white;
    font-weight: 100;
    font-size: 60px;
    margin-left: 4.5rem;
  }

  & h2 {
    color: white;
    font-weight: 100;
    font-size: 35px;
    padding: 10px;

    & span {
      font-weight: 400;
    }
  }

  & .box {
    border: 1px solid white;
  }
`;

const Slides = styled.div``;

const OneCol = styled.div`
  color: white;
  background-color: #ff6666;

  & h1 {
    font-size: 350px;
    text-shadow: 5px 5px 5px #000;
    /* transform: rotate(70deg); */
    font-weight: 800;
  }
`;
const TwoCol = styled.div`
  color: white;
  background-color: #ff6666;

  & h1 {
    font-size: 350px;
    font-weight: 800;
    text-shadow: 8px 8px 8px #000;

    color: #f8f8f8;
    /* transform: rotate(70deg); */
  }
`;

const Box = styled.div`
  color: white;
  background-color: #ff6666;
  margin-left: 4%;
  padding-bottom: 1%;
  padding-top: 1%;
  margin-bottom: 6%;

  & h1 {
    font-size: 35px;
    font-weight: 900;
  }
`;

// const BannerGif = styled.div`
//   background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)),
//     url(${bannergif});
//   background-size: cover;
//   height: 920px;
//   width: 100%;

//   & .city {
//     color: white;
//     font-size: 400px;
//     text-shadow: 5px 5px 5px #000;
//     z-index: 10;
//     margin-top: 10%;
//     transform: rotate(70deg);
//     font-weight: 800;
//   }
//   & .seventeen {
//     font-size: 700px;
//     font-weight: 800;

//     text-shadow: 8px 8px 8px #000;
//     z-index: -1;
//     color: #f8f8f8;
//     transform: rotate(70deg);
//     margin-top: 10%;
//   }
// `;

const DivTwo = styled.div`
  background-image: linear-gradient(
    to top,
    #555555,
    #505050,
    #4a4a4a,
    #454545,
    #404040,
    #393939,
    #333333,
    #2c2c2c,
    #232323,
    #191919,
    #101010,
    #000000
  );
  color: white;
  padding-bottom: 10%;
  padding-top: 10%;
  & h1 {
    font-size: 140px;
    text-shadow: 2px 2px 2px #000;
  }

  & h4 {
    font-weight: 100;
    font-size: 40px;
  }

  @media (min-width: 150px) and (max-width: 249px) {
    h1 {
      font-size: 30px;
    }

    h4 {
      font-size: 12px;
    }
  }

  @media (min-width: 250px) and (max-width: 380px) {
    h1 {
      font-size: 60px;
    }
    h4 {
      font-size: 18px;
    }
  }

  @media (min-width: 381px) and (max-width: 600px) {
    h1 {
      font-size: 90px;
    }
    h4 {
      font-size: 24px;
    }
  }
`;

export default class Hero extends Component {
  render() {
    return (
      <HeroWrapper>
        <Slides className="row center-xs">
          <OneCol className="col-xs-7">
            <h1>City</h1>
          </OneCol>
          <TwoCol className="col-xs-5">
            <h1>17</h1>
          </TwoCol>
        </Slides>
        <DivTwo className="row center-xs">
          <div className="col-xs-12">
            <h1>Welcome.</h1>
            <div className="row center-xs">
              <div className="col-xs-8">
                <h4>
                  Welcome! Welcome to City 17. You have chosen, or have been
                  chosen, to relocate to one of our finest remaining urban
                  centers. I thought so much of City 17 that I elected to
                  establish my administration here, in the citadel so
                  thoughtfully provided by our benefactors. I've been proud to
                  call City 17 my home. And so, whether you are here to stay, or
                  passing through on your journey to parts unknown, welcome to
                  City 17. It's safer here.
                </h4>
              </div>
            </div>
          </div>
        </DivTwo>
        <SectionFour>
          <Slogan className="row center-xs">
            <div className="box col-xs-12 col-sm-4 ">
              <h2>
                What matters in <span>Technological Advancements</span> right
                now?
              </h2>
            </div>
            <div className=" col-xs-12 col-sm-8">
              <h1>We always want to know what you're thinking.</h1>
            </div>
          </Slogan>
        </SectionFour>
      </HeroWrapper>
    );
  }
}
