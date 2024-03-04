import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./context"; // Korrigiere den Import von ThemeProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    {" "}
    {/* Verwende ThemeProvider statt themProvider */}
    <App />
  </ThemeProvider>
);
