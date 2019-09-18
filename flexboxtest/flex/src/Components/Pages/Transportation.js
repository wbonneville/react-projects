import React, { Component } from "react";
import styled from "styled-components";
import gif from "../../images/city2.jpg";
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
`;

export default class Transportation extends Component {
  render() {
    return (
      <Container>
        <Gif className="row middle-xs">
          <div className="col-xs-8">
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
            <p>
              bestrides, circumlocution, circumambulate, misoneism, ambivalent,
              louse, entomologist, tautology, cryptomnesia, analysand,
              prognosticate, credo, neuroses, concomitant, corpuscle, nouveaux,
              hirsute, slalom, apoplectic, arboretum, lozenge, palanquin,
              raffish, loamy, loess, acausal, apophenia, psychopathology,
              pareidolia, parapsychology, demiurge, transmogrify, orthographic,
              sclerotic, schlep, autarky, detente, nonalignment, perestroika,
              ocher, adroitness, temerity, adjutant, querulous, bilious,
              supercilious, contralto, jocoseness, geopolitics, ayatollah,
              ennui, casuistic, ex cathedra, scholasticism, pluralistic,
              psychical, artifice, systematic aphasia, hypermnesia, paretic,
              portend, pathogenetic, prima facie, shrift, via regia, catarrh,
              gainsaid, en bloc,{" "}
            </p>
          </div>
        </Div>
      </Container>
    );
  }
}
