import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const Projects = ({ setDisplayOption }) => {
  return (
    <div>
      Projects
      <div
        className="next-button"
        role="button"
        aria-pressed="false"
        onClick={() => {
          setDisplayOption("howdy");
        }}
        onKeyDown={() => {}}
      >
        <FontAwesomeIcon icon={faCircleArrowRight} />
      </div>
    </div>
  );
};

export default Projects;
