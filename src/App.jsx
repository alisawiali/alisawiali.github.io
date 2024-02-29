import "./App.css";
import "./css/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Intro, Navbar, Services, Experience, Protfolio, Footer } from "./UL";
//  import  themeContext auds dem context
import { themeContext } from "./context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="app"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <div className="container">
        <Intro />
        <Services />
        <Experience />
        <Protfolio />
      </div>
      <Footer />
    </div>
  );
}

export default App;
