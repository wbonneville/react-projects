import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  font-size: 23px;
  margin-left: 7%;
  margin-right: 7%;
  margin-top: 4%;

  & h4 {
    font-weight: 100;
    margin-top: -2%;
  }
`;

export default class Housing extends Component {
  render() {
    return (
      <Div className="row start-xs">
        <div className="col-xs-10">
          <h1>Lorem ipsum dolor sit.</h1>
          <h4>September 16th, 2019</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit eros morbi,
            massa mi integer suspendisse molestie parturient purus interdum,
            facilisis torquent cubilia habitant ornare mus nisl sollicitudin.
            Tincidunt eleifend quis pharetra feugiat justo egestas suspendisse,
            aenean ornare lacus porttitor enim commodo fusce, imperdiet quisque
            eget duis montes id. Litora purus consequat varius magna cursus
            pretium tempor lobortis sapien, vehicula ut nibh lacus montes
            tristique vivamus accumsan nam, ridiculus malesuada mus egestas
            gravida nascetur iaculis sodales. Imperdiet volutpat mi pretium
            libero nascetur augue tincidunt tempor nec, nisi malesuada purus
            ante ac rutrum magnis erat, mattis fusce posuere nostra cubilia
            porttitor nulla odio. Aptent blandit ornare nascetur vulputate
            fermentum hac et ligula platea at dictumst morbi aliquet duis a,
            magna vestibulum nullam nibh penatibus mauris nostra sodales ut
            etiam rutrum iaculis curae in. Ut odio turpis eget ultricies dapibus
            penatibus donec congue, per imperdiet cursus rutrum dictumst class
            tincidunt dis, leo nunc duis purus urna himenaeos proin. Ridiculus
            tortor enim malesuada tempus bibendum phasellus tempor quisque
            condimentum penatibus, mattis est senectus porta venenatis inceptos
            nulla iaculis varius, ut sociosqu imperdiet facilisis viverra
            eleifend non etiam congue. Quisque laoreet semper sapien pharetra
            elementum condimentum nibh at, malesuada dapibus ante varius
            lobortis class ultrices sagittis commodo, erat cubilia hendrerit
            purus sodales vehicula tincidunt. Viverra enim cubilia ligula
            pretium vulputate dui senectus nulla, massa consequat a mauris
            mattis scelerisque in, vehicula cursus phasellus facilisis iaculis
            id malesuada. Laoreet eget neque sociosqu nulla morbi parturient ad,
            porttitor commodo blandit mus torquent magnis, feugiat id malesuada
            varius mattis accumsan. Dis malesuada ut in fermentum quisque
            condimentum proin, auctor curabitur hendrerit hac laoreet nec. Nec
            risus aliquet tempus bibendum at torquent eget, vulputate enim
            habitant curabitur vel posuere tristique odio, proin ultrices vitae
            praesent morbi suspendisse. Purus lobortis tristique neque venenatis
            fames curabitur viverra pulvinar ut vel tincidunt, leo commodo est
            malesuada congue habitasse rutrum morbi sociis imperdiet, erat
            euismod consequat duis posuere feugiat tortor dapibus nec montes. At
            rutrum accumsan ornare aliquet dictum urna interdum scelerisque
            tincidunt, cubilia leo venenatis curae nunc habitant tristique
            ultrices posuere, nostra nec rhoncus iaculis facilisis lobortis
            penatibus dictumst, sociis eleifend velit torquent aenean ad
            elementum malesuada.
          </p>
        </div>
      </Div>
    );
  }
}
