import React from "react";
import "../App.css";

const Resume = () => {
  return (
    <div className="margin-30">
      <h1 className="page-title-margin margin-bottom-30">
        <span className="page-title large-font">Resume</span>
      </h1>
      <div className="resume-container flex-column">
        <a className="action-button" href="images/resume_placeholder.pdf" download>
          Download Resume
        </a>
        <img
          className="pic_of_resume"
          alt="resume"
          src="images/resume_placeholder.jpg"
        ></img>
      </div>
    </div>
  );
};

export default Resume;
