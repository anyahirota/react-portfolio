import React, { useState } from "react";
import "../App.css";
import { Document, Page } from "react-pdf";

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
        {/* <Document
          file={resume}
          // onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={1} />
        </Document> */}
      </div>
    </div>
  );
};

export default Resume;
