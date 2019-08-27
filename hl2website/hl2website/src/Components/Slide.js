import React, { Component } from "react";
import styled from "styled-components";

const ImgWrap = styled.img`
  height: 100%;
  width: 100%;
  opacity: 0.8;
`;

export default class Index extends Component {
  render() {
    return (
      <div>
        <ImgWrap src="https://wallup.net/wp-content/uploads/2017/03/27/381707-minimalism-selective_coloring-Half-Life_2-The_Citadel-Combine-video_games-artwork.jpg"></ImgWrap>
      </div>
    );
  }
}
