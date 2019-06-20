import React, { useContext } from "react";
import { MDXProvider } from "@mdx-js/tag";
import styled, { ThemeProvider } from "styled-components";
import { ThemeContext } from "../globalState/index";

import { A, H1, P } from "./mdx";

import { light_theme, dark_theme } from "../styles/theme";
// import { GlobalStyles } from "../styles/styles";
// import { GatsbyHighlightStyles } from "../styles/gatsby-highlight-styles";

// import Header from "./header";
// import Footer from "./footer";

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
  //   const { useDarkTheme } = useContext(ThemeContext);
  return (
    <MDXProvider components={mdxComponents}>
      {/* <GlobalStyles />
        <GatsbyHighlightStyles /> */}
      <Main>{children}</Main>
    </MDXProvider>
  );
};
