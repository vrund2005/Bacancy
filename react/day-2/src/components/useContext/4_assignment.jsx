// In the sandbox, add a context (e.g. `ThemeContext` or `UserContext`),
// wrap part of the app in a Provider, and build a child component that
// reads the value with `useContext` and displays it (e.g. theme name or
// user name).

import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Ass4() {
  const { theme, setTheme } = useContext(ThemeContext);
  const style = {
    backgroundColor: theme === "Dark" ? "black" : "white",
    color: theme === "Dark" ? "white" : "black",
    minHeight: "35vh",
    padding: "50px",
  };

  return (
    <div style={style}>
      <p>Your theme : {theme}</p>
      <button
        onClick={() => {
          setTheme((prev) => (prev === "Dark" ? "Light" : "Dark"));
        }}
      >
        Click to change theme
      </button>
    </div>
  );
}

export default Ass4;
