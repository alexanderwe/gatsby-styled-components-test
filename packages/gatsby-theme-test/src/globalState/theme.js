import React, { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  // Use localStorage to the save the theme selection
  const initalUseDarkTheme =
    window.localStorage.getItem("darkTheme") === "true" || false;
  const [useDarkTheme, setUseDarkTheme] = useState(initalUseDarkTheme);

  useEffect(() => {
    window.localStorage.setItem("darkTheme", useDarkTheme);
  });

  return (
    <ThemeContext.Provider value={{ useDarkTheme, setUseDarkTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
