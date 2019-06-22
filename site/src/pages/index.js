import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 32pt;
  color: black;
  margin-left: 200px;
  background: green;
  width: 100px;
`;

export default () => (
  <Wrapper>
    Styles are correctly loaded in index.js but not in layout.js and every other
    file which is not a "page"
  </Wrapper>
);
