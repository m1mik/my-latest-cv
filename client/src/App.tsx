import React from "react";
import logo from "./logo.svg";
import "./App.css";
import nataka from "../public/nataka.png";

function App(): any {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <span>Привет натака )</span>
          <img style={{ borderRadius: "50%" }} src={nataka} alt="Nataka" />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
