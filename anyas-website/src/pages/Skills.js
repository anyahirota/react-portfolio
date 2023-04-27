import React from 'react';
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const Skills = ({setDisplayOption}) => {
  return (
    <div>
      Skills
      <div
          className="next-button"
          role="button"
          aria-pressed="false"
          onClick={() => {
            setDisplayOption("resume");
          }}
          onKeyDown={() => {}}
        >
          <FontAwesomeIcon icon={faCircleArrowRight} />
        </div>
    </div>

  );
}

export default Skills;