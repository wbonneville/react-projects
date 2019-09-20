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
    width: 90%;
  }
`;

const SignUp = styled.div`
  background-color: #ff6666;
  color: white;
  padding-top: 5%;
  padding-bottom: 5%;
  text-align: left;

  & .sign {
    margin-right: 1rem;
  }
`;

const InputForm = styled.div`
  & h1 {
    font-size: 50px;
    width: 90%;
  }

  & h2 {
    width: 55%;
  }

  & p {
    width: 90%;
  }

  & .agree {
    font-size: 12px;
  }
`;

const Input = styled.input`
  width: 90%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  font-size: 30px;
  font-weight: 200;
`;

const Button = styled.button`
  background-color: #ff6666;
  border: 2px solid white;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 90%;
`;

export default class Housing extends Component {
  render() {
    return (
      <React.Fragment>
        <Div className="row start-xs">
          <div className=" col-xs-12">
            <h1>Rationing and Credits</h1>
            <h4>September 16th, 2019</h4>
            <p>
              Cryptocurrency solutions are making for more difficult conditions
              in their own right in the wake of the crypto collapse. Despite
              these obstacles, some investors remain. The opportunity in the
              crypto market is enticing for many people. However, if crypto
              fails to remain profitable and/or evolves into more stable models,
              then the idea is more apparent. Many can also become increasingly
              dissatisfied with this market, especially when any return will not
              justify the risk. Credit is an important tactic used to retain or
              attract investment, resulting in the output of credit in financial
              markets, such as a high value of one security compared to another.
              In a generally anti-reward market, including a declining market,
              credit is often the practice.
              <br></br>
              <br></br>
              The exchange rate or the value of a currency against another
              currency is ultimately the relationship. The money invested in
              these currencies can be thus regarded as debts - a risk. Whenever
              two currencies are trading together in the same range, then the
              value of a currency can be interpreted to be highly correlated.
              Before the crypto market, Bitcoin - the most famous crypto in the
              long run - was probably the most popular for it’s kind of
              operations. It’s easier to trade cryptocurrency or stock on a
              cryptocurrency than it is to trade physical currency. This is why
              it is somewhat less important to track the currency’s price than
              in other environments where it is more tangible.
              <br></br>
              <br></br>
              What is Creduc, an “alternative math” theory? A currency is
              usually traded in reference to another currency, i.e. when the
              opposite currency is traded in your favor, you receive some cash
              in return for your investments. Other cryptocurrencies have their
              own own origin but are often similar to Bitcoin or Ether. Creduc
              is a theory invented by “anonymous mathematicians” which suggests
              that “real-time calculations” in the electronic (computer) world
              have a more stable value than the value of an individual asset.
              Thus, when the value of a currency falls by 5%, Creduc can make it
              possible to bet another currency in your favor for 2 hours.
              <br></br>
              <br></br>
              This capital gains strategy mimics the current stock market
              concept, except, where the actual statistical performance is
              reversed, and the reward is nil. The cryptocurrency trade is a
              process of risky currency betting and thus it may not be the most
              appropriate form for fund raising, because making returns on the
              wider economy is probably more suitable.
            </p>
          </div>
        </Div>
        <SignUp className="row center-xs">
          <h1 className="sign">
            <i className="fas fa-forward fa-6x"></i>
          </h1>

          <InputForm className="col-xs-5">
            <h1>fwd:Current Rations</h1>
            <h2>
              <i>
                Your guide to rationing and credits in the age of technology
              </i>
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
              Please also let me know about other rationing initiatives and
              events.
            </p>
            <Button type="button">Sign up for free</Button>
            <p className="agree">
              By signing up you agree to receive email newsletters and
              notifications from Citadel. You can change your preferences at any
              time. View our Privacy Policy for more detail.
            </p>
          </InputForm>
        </SignUp>
      </React.Fragment>
    );
  }
}
