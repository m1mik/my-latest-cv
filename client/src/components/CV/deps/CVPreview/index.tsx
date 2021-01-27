import React from "react";
import TestDoc from "../TestDoc";
import { PDFViewer } from "@react-pdf/renderer";

const CVPreview = () => {
  return (
    <PDFViewer style={{ width: "900px", height: "450px" }}>
      <TestDoc />
    </PDFViewer>
  );
};

export default CVPreview;
