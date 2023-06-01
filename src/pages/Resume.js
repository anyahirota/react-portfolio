import React from "react";
import "../App.css";

const Resume = () => {
  return (
    <div className="margin-30">
      <h1 className="page-title-margin margin-bottom-30">
        <span className="page-title large-font">Resume</span>
      </h1>
      <div className="resume-container flex-column">
        <div
          className="action-button"
          role="button"
          aria-pressed="false"
          onClick={() => {}}
          onKeyDown={() => {}}
        >
          Download Resume
        </div>
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
