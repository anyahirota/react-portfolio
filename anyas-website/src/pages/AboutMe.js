import React from 'react';
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const AboutMe = ({setDisplayOption}) => {
  return (
    <div>
      About Me
      <div
          className="next-button"
          role="button"
          aria-pressed="false"
          onClick={() => {
            setDisplayOption("skills");
          }}
          onKeyDown={() => {}}
        >
          <FontAwesomeIcon icon={faCircleArrowRight} />
        </div>
    </div>
  );
}

export default AboutMe;