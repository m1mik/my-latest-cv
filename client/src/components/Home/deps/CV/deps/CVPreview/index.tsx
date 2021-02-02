import React, { useState, useEffect } from "react";
import TestDoc from "../TestDoc";
import CircularProgress from "@material-ui/core/CircularProgress";
import { PDFViewer } from "@react-pdf/renderer";

const CVPreview = () => {
  const [isPDFVisible, setPDFVisibility] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setPDFVisibility(true), 350);
  }, []);

  return isPDFVisible ? (
    <PDFViewer style={{ width: "100%", height: "450px" }}>
      <TestDoc />
    </PDFViewer>
  ) : (
    <div style={{ height: "450px" }}>
      <CircularProgress />
    </div>
  );
};

export default CVPreview;
