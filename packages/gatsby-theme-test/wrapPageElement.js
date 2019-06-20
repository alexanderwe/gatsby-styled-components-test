import React from "react";
import Layout from "./src/components/layout";
import { ContextProvider } from "./src/globalState/state";

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => (
  <ContextProvider>
    <Layout {...props}>{element}</Layout>
  </ContextProvider>
);

export default wrapPageElement;
