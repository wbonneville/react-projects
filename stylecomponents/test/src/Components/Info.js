import React from "react";
import styled from "styled-components";
import unsplash1 from "../images/unsplash1.jpg";

const Info = styled.div`
  info {
    background-img: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      (${unsplash1}) no-repeat center;
  }

  & clipart {
    width: 350px;
  }
`;

export default Info;
