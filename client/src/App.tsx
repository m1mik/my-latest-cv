import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import UploadImage from "./components/UploadImage";
import DownloadCVLink from "./components/DownloadCVLink";
import CVPreview from "./components/CVPreview";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CVPreview />
        <DownloadCVLink />
        <UploadImage />
      </header>
    </div>
  );
};

export default App;
