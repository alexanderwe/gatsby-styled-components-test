import React from "react";
import { ThemeProvider } from "./theme";

function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight((kids, parent) => React.cloneElement(parent, { children: kids }), children);
}

function ContextProvider({ children }) {
  return <ProviderComposer contexts={[<ThemeProvider />]}>{children} </ProviderComposer>;
}

export { ContextProvider };
