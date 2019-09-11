import React, { Component } from "react";
import styled from "styled-components";
import image1 from "../../images/factory.jpeg";
import image2 from "../../images/breen.jpg";
import image3 from "../../images/job.png";
import image4 from "../../images/soviet.jpg";
import Epic from "./Api";

// SECTION 1 STYLES

const SectionWrapper = styled.div`
  padding: 40px;

  & hr {
    height: 1px;
    background-color: black;
    color: black;
    border: 0 none;
  }
`;

const JobsSectionOne = styled.div`
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const JobsHeader = styled.div`
  & h2 {
    font-size: 32px;
    font-weight: 700;
  }

  @media (max-width: 800px) {
    margin-bottom: -30px;
    flex-direction: column;
  }
`;

const JobsInfo = styled.div`
  & h3 {
    margin-top: 1.9em;
    font-size: 17px;
    text-align: left;
    font-weight: 100;
    color: #595858;
  }
`;

// SECTION 2 STYLES

const JobsSectionTwo = styled.div``;

const ImageOne = styled.div`
  background-image: url(${image1});
  background-size: cover;
  height: 350px;
  width: 585px;
`;

const Featured = styled.div`
  margin-top: 1%;

  font-weight: 500;
  color: purple;
`;

const FeaturedJob = styled.div`
  & h1 {
    font-size: 40px;
    margin-top: 2%;
  }

  & h4 {
    font-size: 18px;
    font-weight: 100;
    width: 80%;
  }
`;

// Section 3 Styles

const SectionThree = styled.div`
  margin-top: 2%;
`;

const FeaturedImageOne = styled.div`
  margin-top: 5rem;
  background-image: url(${image1});
  background-size: cover;
  height: 150px;
  width: 275px;
`;

const FeaturedImageTwo = styled(FeaturedImageOne)`
  background-image: url(${image2});
`;

const FeaturedImageThree = styled(FeaturedImageOne)`
  background-image: url(${image3});
`;

const FeaturedImageFour = styled(FeaturedImageOne)`
  background-image: url(${image4});
`;

// SECTION 4 STYLES

const SectionFour = styled.div`
  margin-top: 6%;
  margin-bottom: 6%;
  background: black;
  padding: 50px;
`;

const Slogan = styled.div`
  & h1 {
    color: white;
    font-weight: 100;
    font-size: 60px;
    margin-left: 5rem;
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

// SECTION 5 STYLES

const SectionFive = styled.div``;
const LatestJobs = styled.div``;
const Message = styled.div`
  & h2 {
    font-size: 25px;
  }

  & .thickHr {
    height: 2px;
    background-color: black;
    color: black;
    border: 0 none;
  }
`;

export default class Jobs extends Component {
  render() {
    return (
      <SectionWrapper>
        {/* SECTION ONE  */}

        <JobsSectionOne className="row start-xs">
          <JobsHeader className="col-xs-12 col-sm-6">
            <h2>Jobs and Positions</h2>
          </JobsHeader>
          <JobsInfo className="col-xs-12 col-sm-6">
            <h3>
              What is AI? It's the quest to build machines that can reason,
              learn, and act intelligently, and it has barely begun. We cover
              the latest advances in machine learning, neural networks, and
              robots.
            </h3>
          </JobsInfo>
          <div className="col-xs-12">
            <hr></hr>
          </div>
        </JobsSectionOne>

        {/* SECTION TWO */}

        <JobsSectionTwo>
          <Featured className="row start-xs">
            <div className="col-xs-12">Featured</div>
          </Featured>

          <FeaturedJob className="row start-xs">
            <div className="col-xs-12 col-lg-6">
              <h1>
                Facebook is making its own AI deepfakes to head off a
                disinformation disaster
              </h1>
              <h4>
                The CTO of Facebook says videos forged using AI will be used
                maliciously on its platforms before long.
              </h4>
            </div>

            <div className="col-xs-12 col-lg-6">
              <ImageOne></ImageOne>
            </div>
          </FeaturedJob>
        </JobsSectionTwo>

        {/* SECTION THREE */}

        <SectionThree className="row">
          <div className="col-xs-12 col-lg-3">
            <hr></hr>
            <Featured className="row start-xs">
              <div className="col-xs-12">Featured</div>
            </Featured>
            <h3>
              AI thinks this flood photo is a toilet. Fixing that could improve
              disaster response.
            </h3>
            <FeaturedImageOne></FeaturedImageOne>
          </div>
          <div className="col-xs-12 col-lg-3">
            <hr></hr>
            <Featured className="row start-xs">
              <div className="col-xs-12">Featured</div>
            </Featured>
            <h3>
              OpenAI has released the largest version yet of its
              fake-news-spewing AI
            </h3>
            <FeaturedImageTwo></FeaturedImageTwo>
          </div>
          <div className="col-xs-12 col-lg-3">
            <hr></hr>
            <Featured className="row start-xs">
              <div className="col-xs-12">Featured</div>
            </Featured>
            <h3>
              The world’s top deepfake artist is wrestling with the monster he
              created
            </h3>
            <FeaturedImageThree></FeaturedImageThree>
          </div>
          <div className="col-xs-12 col-lg-3">
            <hr></hr>
            <Featured className="row start-xs">
              <div className="col-xs-12">Featured</div>
            </Featured>
            <h3>
              Having mastered Space Invaders, chess, and Go, AI tackles video
              soccer
            </h3>
            <FeaturedImageFour></FeaturedImageFour>
          </div>
        </SectionThree>

        {/* SECTION 4 */}

        <SectionFour>
          <Slogan className="row">
            <div className="box col-xs-12 col-sm-4 ">
              <h2>
                What matters in <span>Artificial Intelligence</span> right now?
              </h2>
            </div>
            <div className=" col-xs-12 col-sm-6">
              <h1>We always want to know what you're thinking.</h1>
            </div>
          </Slogan>
        </SectionFour>

        {/* SECTION 5 */}

        <SectionFive>
          <LatestJobs className="row">
            <Message className="col-xs-12">
              <hr className="thickHr"></hr>
              <h2>Latest from Job Board</h2>
              <hr className="standardHr"></hr>
            </Message>
          </LatestJobs>
        </SectionFive>
        <Epic></Epic>
      </SectionWrapper>
    );
  }
}
