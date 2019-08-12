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

  & h2 {
    font-size: 30px;
    margin: 5;
    padding-bottom: 10px;
    color: white;
  }

  & ul {
    list-style: none;
    padding: 0px;
  }

  & li {
    line-height: 2em;
    font-size: 18px;
    color: white;
  }
`;

export default Info;
