import { createContext } from "react";
import React from "react";
import Theme from "./4_assignment";
import { useState } from "react";

export const ThemeContext = createContext(null);

function ThemeContext1() {
  const [theme, setTheme] = useState("Dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <h1>Theme Context</h1>
      <Theme />
    </ThemeContext.Provider>
  );
}

export default ThemeContext1;
