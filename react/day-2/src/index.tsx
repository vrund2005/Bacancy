import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NameProvider } from "./components/useContext/nameContext";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <NameProvider>
      <App />
    </NameProvider>
  </React.StrictMode>
);
