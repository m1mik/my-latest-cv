import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import TestDoc from "./TestDoc";
import UploadImage from './UploadImage';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PDFViewer style={{width: "900px", height: "450px"}}>
          <TestDoc />
        </PDFViewer>
        <div>
          <PDFDownloadLink document={<TestDoc />} fileName="somename.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
          </PDFDownloadLink>
        </div>
        <UploadImage />
      </header>
    </div>
  );
}

export default App;
