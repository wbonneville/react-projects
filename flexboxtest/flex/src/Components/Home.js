import React, { Component } from "react";
import styled from "styled-components";

const HeroWrapper = styled.div`
  margin-top: 0;
`;

const SectionFour = styled.div`
  margin-top: 0;
  margin-bottom: 6%;
  background: #301d20;
  padding: 50px;
  margin-left: -0.7%;
  & h1 {
    font-size: 350px;
    text-shadow: 5px 5px 5px #000;
    /* transform: rotate(70deg); */
    font-weight: 800;
  }

  & h1 {
    font-size: 350px;
    text-shadow: 5px 5px 5px #000;
    /* transform: rotate(70deg); */
    font-weight: 800;
  }
`;

const Slogan = styled.div`
  padding-top: 5rem;
  & h1 {
    color: white;
    font-weight: 100;
    font-size: 60px;
    margin-left: 4.5rem;
  }

  & h2 {
    color: white;
    font-weight: 100;
    font-size: 70px;
    padding: 10px;

    & span {
      font-weight: 400;
    }
  }

  & .box {
    border: 1px solid white;
  }

  @media (min-width: 150px) and (max-width: 249px) {
    h2 {
      font-size: 15px;
      padding: -15px;
    }

    h4 {
      font-size: 15px;
    }
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

  @media (min-width: 150px) and (max-width: 249px) {
    h1 {
      font-size: 75px;
    }
  }

  @media (min-width: 250px) and (max-width: 449px) {
    h1 {
      font-size: 150px;
    }
  }
  @media (min-width: 450px) and (max-width: 700px) {
    h1 {
      font-size: 200px;
    }
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
  & h1 {
    font-size: 350px;
    text-shadow: 5px 5px 5px #000;
    /* transform: rotate(70deg); */
    font-weight: 800;
  }

  @media (min-width: 150px) and (max-width: 249px) {
    h1 {
      font-size: 75px;
    }
  }

  @media (min-width: 250px) and (max-width: 449px) {
    h1 {
      font-size: 150px;
    }
  }
  @media (min-width: 450px) and (max-width: 700px) {
    h1 {
      font-size: 200px;
    }
  }
`;

const DivTwo = styled.div`
  background-color: #a27279;
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

const SignUp = styled.div`
  color: white;
  padding-top: 10%;
  padding-bottom: 5%;
`;

const InputForm = styled.div`
  & h1 {
    font-size: 50px;
  }

  & .agree {
    font-size: 12px;
  }
`;

const Input = styled.input`
  padding: 12px 20px;
  box-sizing: border-box;
  font-size: 30px;
  font-weight: 200;
  width: 78%;
`;

const Button = styled.button`
  background-color: #301d20;
  border: 2px solid white;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 90%;
`;

const WhiteBlock = styled.div`
  background-color: white;

  & h1 {
    font-size: 10px;
    opacity: 0.2;
    letter-spacing: 4px;
    text-transform: uppercase;
    font-weight: 100;
  }
`;
export default class Hero extends Component {
  render() {
    return (
      <HeroWrapper>
        <Slides className="row center-xs">
          <OneCol className=" col-xs-12 col-md-7">
            <h1>City</h1>
          </OneCol>
          <TwoCol className="col-xs-12 col-md-5">
            <h1>17</h1>
          </TwoCol>
        </Slides>
        <div className="row center-xs">
          <div className="col-xs-12">
            <WhiteBlock>
              <h1>Building a Harmonious Future</h1>
            </WhiteBlock>
          </div>
        </div>
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
        <div className="row center-xs">
          <div className="col-xs-12">
            <WhiteBlock>
              <h1>Driving Reform</h1>
            </WhiteBlock>
          </div>
        </div>
        <SectionFour>
          <Slogan className="row center-xs">
            <div className="box col-xs-12 col-sm-6   ">
              <h2>
                What matters in our <span>Urban Centers</span> right now?
              </h2>
            </div>
          </Slogan>
          <SignUp className="row center-xs">
            <InputForm className="col-xs-12 col-sm-6">
              <h1>fwd:Citadel</h1>
              <h2>
                <i>Your guide to the latest in the age of prosperity</i>
              </h2>
              <h4>Delivered Every Morning</h4>
              <Input
                type="email"
                name="email"
                id="email_input"
                placeholder="Enter your email, get a newsletter"
              ></Input>
              <p>Please complete this required field.</p>
              <p>
                {" "}
                Please also let me know about other Citadel initiatives and
                events.
              </p>
              <Button type="button">Sign up for free</Button>
              <p className="agree">
                By signing up you agree to receive email newsletters and
                notifications from Citadel. You can change your preferences at
                any time. View our Privacy Policy for more detail.
              </p>
            </InputForm>
          </SignUp>
        </SectionFour>
      </HeroWrapper>
    );
  }
}
