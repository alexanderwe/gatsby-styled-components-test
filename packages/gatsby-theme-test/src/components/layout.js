import React from "react";
import { MDXProvider } from "@mdx-js/tag";
import styled, { ThemeProvider } from "styled-components";

import { A, H1, P } from "./mdx";

import { light_theme } from "../styles/theme";

const Main = styled.main`
  margin: 0 auto;
  align-self: center;
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-template-columns: 1fr;
  grid-template-rows: minmax(auto, 100px) auto minmax(auto, 50px);
  justify-self: center;
  max-width: 800px;
  min-height: 100vh;
  padding: 0 20px 20px 20px;
`;

const Content = styled.div`
  grid-area: content;
  margin-top: 50px;
`;

const mdxComponents = {
  a: A,
  h1: H1,
  p: P
};

export default ({ site, frontmatter = {}, children }) => {
  return (
    <ThemeProvider theme={light_theme}>
      <MDXProvider components={mdxComponents}>
        <Main>{children}</Main>
      </MDXProvider>
    </ThemeProvider>
  );
};
