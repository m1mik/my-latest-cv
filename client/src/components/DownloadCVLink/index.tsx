import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import TestDoc from "../TestDoc";

const index = () => {
  return (
    <PDFDownloadLink document={<TestDoc />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>
  );
};

export default index;
