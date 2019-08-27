import React from "react";
import styled from "styled-components";
import slide from "../images/slide.jpg";

const ImageWrapper = styled.div`
  background: url(${slide});
`;

function Slide() {
  return <ImageWrapper></ImageWrapper>;
}

export default Slide;
