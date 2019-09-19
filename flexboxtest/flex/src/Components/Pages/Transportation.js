import React, { Component } from "react";
import styled from "styled-components";
import gif from "../../images/download.gif";
import anon from "../../images/anon.png";
const Container = styled.div`
  background-color: #e9e9e9;
`;

const Gif = styled.div`
  background-image: url(${gif});
  background-size: cover;
  height: 450px;

  & h1 {
    color: white;
    margin-left: 7%;
    margin-right: 7%;
    font-size: 60px;
    font-weight: 800;
    /* text-shadow: 2px 2px 1px #000; */
  }

  & h4 {
    color: white;
    margin-left: 7%;
    margin-right: 7%;
    font-size: 30px;
    font-weight: 100;
  }
`;

const Div = styled.div`
  font-size: 23px;
  margin-left: 7%;
  margin-right: 7%;
  margin-top: 4%;
  color: #272727;

  & h4 {
    font-weight: 100;
    margin-top: -2%;
    width: 90%;
  }

  & h3 {
    color: #272727;
    font-size: 22px;
  }
`;

const Breaker = styled.div`
  background-color: #272727;
  height: 200px;
  margin-top: 6%;
  margin-bottom: 6%;

  & h1 {
    font-size: 30px;
    font-weight: 100;
    color: white;
  }
`;

const People = styled.div``;

const PeopleTwo = styled.div`
  margin-right: 12rem;
  margin-left: 12rem;
`;

const Person = styled.div`
  display: flex;
  justify-content: center;
`;
const Anon = styled.div`
  background-image: url(${anon});
  background-size: cover;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: white;
  &:hover {
    opacity: 0.7;
  }
`;

const PeopleInfoOne = styled.div`
  margin-bottom: 5%;

  & h1 {
    font-size: 20px;
    font-weight: 100;
    color: #272727;
  }
  & h4 {
    font-size: 15px;
    font-weight: 100;
    color: #272727;
  }
`;

const PeopleInfoTwo = styled.div`
  padding-bottom: 5%;
  margin-right: 12rem;
  margin-left: 12rem;
  & h1 {
    font-size: 20px;
    font-weight: 100;
    color: #272727;
  }
  & h4 {
    font-size: 15px;
    font-weight: 100;
    color: #272727;
  }
`;

export default class Transportation extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Gif className="row middle-xs">
            <div className=" col-xs-12 col-md-8">
              {" "}
              <h1>Transportation, but not as you know it.</h1>
              <h4>
                Come learn how seismic shifts in transportation technology are
                going to affect every industry on the planet.
              </h4>
            </div>
          </Gif>
          <Div className="row start-xs">
            <div className=" col-xs-10">
              <h1>Hardware, software, everyware.</h1>
              <h4>September 16th, 2019</h4>
              <h3>
                Current human skills have led us to a good place – why will AI
                change that?
              </h3>
              <p>
                The theme of AI driving the future of transportation has
                certainly captured the imagination, spurred by auto giants’
                recent moves to invest billions to position themselves at the
                top of the AI food chain. But we’re still too early for the hype
                to die down; the temptation to talk up the potential
                opportunities is strong.
                <br></br>
                <br></br>
                At the same time, there are plenty of emerging concerns for
                businesses and citizens that are far greater. But, if AI is
                going to “power” transport, it first needs to be treated as a
                technology itself. So what are the key challenges – and
                opportunities – for businesses and policymakers who wish to
                tackle this once-in-a-lifetime transformation? Getting the
                benefits right Whether or not AI is used to “power” transport –
                to refer to specific vehicles, for example – one thing is clear:
                if it’s going to change the future of transportation, it will
                come with a price tag. Despite the hype, things aren’t going to
                be plain sailing – yet. Government procurement, for instance,
                will be a hot topic.
                <br></br>
                <br></br>
                Prospective suppliers will expect fair payment and value for
                money – and convincing them to select an AI-infused transport
                engine will be one of the most important challenges. Businesses
                will need to show an understanding of how to make it work in the
                real world, not in some virtual, detached future. Complications
                abound too. A single single road car can transport over a
                million people a day, and all together they produce around
                10,000 tons of greenhouse gases – just one vehicle producing
                these emissions may be enough to take a city off the air quality
                chart. Taxation will follow The true interest comes when
                governments explore how they might tax AI.
                <br></br>
                <br></br>
                Every technology that is new will bring with it the potential
                for new ways to make money. Even with an AI-powered transport
                driver, eventually governments may need to reassess the meaning
                of what it means to transport one billion people a day. To a
                government, whether such a project is providing a much-needed
                service, is a national imperative, or has other consequences.
                Meanwhile, the road map ahead is only just beginning to be laid
                out.
                <br></br>
                <br></br>
                The Government Procurement Agency (GPA) has written the
                guidelines for how to ensure these changes don’t interfere with
                existing contracts and run into thorny issues around how to
                manage transition costs and, crucially, outsourcing. The
                ultimate prize So far, the best approach seems to be adopting an
                open mind about how this transforms the way we “power”
                transport. While every aspect of today’s travel system is ripe
                for disruption, keeping an open mind about AI also means
                understanding that smart vehicles will bring with them a new
                source of revenue – one that may depend on innovative use of
                taxing – and that will need to be baked into any procurement.
                <br></br>
                <br></br>
                Here at Conversas Group, we run Digital Acceleration Projects
                for companies big and small that are thinking about how a
                digital future of transport can reshape the way business takes
                place. These projects (as well as those we run with big
                companies) offer an opportunity to do this and many other things
                simultaneously, often within a year, in an iterative manner,
                including exploring the long-term implications of change for
                making and delivering products. There’s a reason AI has now hit
                the headlines. On its own, the technology does offer real
                benefits. But working out how it all plays out – from the seats
                to the back of the car – requires a little planning. The good
                news is, it can be done in a business-as-usual environment and
                it’s the same for governments.
                <br></br>
                <br></br>
                As with everything, before we get too excited and start putting
                all our eggs in one basket, we need to consider what we really
                want to be achieved.{" "}
              </p>
            </div>
          </Div>
          <Breaker className="row center-xs middle-xs">
            <h1> Transportation Committee</h1>
          </Breaker>

          <People className="row center-xs">
            <Person className="col-xs-3">
              <Anon></Anon>
            </Person>

            <Person className="col-xs-3">
              <Anon></Anon>
            </Person>
            <Person className="col-xs-3">
              <Anon></Anon>
            </Person>
            <Person className="col-xs-3">
              <Anon></Anon>
            </Person>
          </People>
          <PeopleInfoOne className="row center-xs">
            <div className="col-xs-3">
              <h1>Artois Somerset</h1>
              <h4>EVP of R&D and Chief Product Officer, G-Wave</h4>
            </div>
            <div className="col-xs-3">
              <h1>Morocco Exeter</h1>
              <h4>President, RSA</h4>
            </div>
            <div className="col-xs-3">
              <h1>Ratcliffe Troilus</h1>
              <h4>
                Senior Director of Product Management, Compute & MS
                Infrastructure, Citadel Cloud
              </h4>
            </div>
            <div className="col-xs-3">
              <h1>Egeon Catling</h1>
              <h4>
                Corporate Vice President and Head of Advanced Research, CCP
              </h4>
            </div>
          </PeopleInfoOne>
          <PeopleTwo className="row center-xs">
            <Person className="col-xs-4">
              <Anon></Anon>
            </Person>
            <Person className="col-xs-4">
              <Anon></Anon>
            </Person>
            <Person className="col-xs-4">
              <Anon></Anon>
            </Person>
          </PeopleTwo>
          <PeopleInfoTwo className="row center-xs">
            <div className="col-xs-4">
              <h1>Dumaine Brutus</h1>
              <h4>CEO and Cofounder, Citadel Cloud Technologies</h4>
            </div>
            <div className="col-xs-4">
              <h1>Quince Basho</h1>
              <h4>
                Principal Investigator, Engineering Quantum Systems Group, MIT
              </h4>
            </div>
            <div className="col-xs-4">
              <h1>Antonio Rivers</h1>
              <h4>Research Scientist, City 17 Heights National Laboratory</h4>
            </div>
          </PeopleInfoTwo>
        </Container>
      </React.Fragment>
    );
  }
}
