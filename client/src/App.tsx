import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import UploadImage from "./components/UploadImage";
import DownloadCVLink from "./components/DownloadCVLink";
import CVPreview from "./components/CVPreview";
import { makeStyles } from "@material-ui/core/styles";

const useClasses = makeStyles((theme: any) => {
  console.log(theme);
  return {
    test: { ...theme.test },
  };
});

const App: React.FC = () => {
  const classes = useClasses();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CVPreview />
        <DownloadCVLink />
        <UploadImage />
        <div className={classes.test}>text</div>
      </header>
    </div>
  );
};

export default App;
