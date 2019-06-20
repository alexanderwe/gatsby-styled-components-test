import React from "react";
import styled from "styled-components";

const A = styled.a`
  display: inline-block;
  position: relative;
  color: ${props => props.theme.primary};
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${props => props.theme.primary};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover {
    &:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

export default props => <A {...props} />;
