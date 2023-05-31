import React, { useState } from "react";
import "../App.css";
import { Document, Page, pdfjs } from "react-pdf";
import resumePlaceholder from "../resume_placeholder.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  return (
    <div>
      <h1 className="page-title-margin">
        <span className="page-title">Resume</span>
      </h1>
      <div className="resume-container">
        <img
          className="pic_of_resume"
          alt="resume"
          src="images/resume_placeholder.jpg"
        ></img>
        {/* <Document file={resumePlaceholder} onLoadError={console.error}>
          <Page pageIndex={0} />
        </Document> */}
      </div>
    </div>
  );
};

export default Resume;
